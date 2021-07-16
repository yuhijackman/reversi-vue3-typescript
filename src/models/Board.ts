/* eslint-disable no-param-reassign */
// Types
import CellState from '@/types/CellState';

// Models
import Cell from '@/models/Cell';
import Row from '@/models/Row';
import Coordinate from '@/models/Coordinate';

interface TraverseSchema {
  [x: string]: any,
  right: (prev: Coordinate) => Coordinate,
  left: (prev: Coordinate) => Coordinate,
  top: (prev: Coordinate) => Coordinate,
  bottom: (prev: Coordinate) => Coordinate,
  topRight: (prev: Coordinate) => Coordinate,
  topBottom: (prev: Coordinate) => Coordinate,
  topLeft: (prev: Coordinate) => Coordinate,
  bottomLeft: (prev: Coordinate) => Coordinate,
}
export interface PieceCountsByColor {
  black: number,
  white: number,
}

export class Board {
  public rows: Row[];

  private traverseSchema: TraverseSchema;

  public turn: CellState = CellState.Black;

  public end = false;

  constructor() {
    this.rows = [...Array(8).keys()].map((x) => new Row(x));
    this.traverseSchema = {
      right: (prev: Coordinate) => (new Coordinate(prev.x, prev.y + 1)),
      left: (prev: Coordinate) => (new Coordinate(prev.x, prev.y - 1)),
      top: (prev: Coordinate) => (new Coordinate(prev.x - 1, prev.y)),
      bottom: (prev: Coordinate) => (new Coordinate(prev.x + 1, prev.y)),
      topRight: (prev: Coordinate) => (new Coordinate(prev.x - 1, prev.y + 1)),
      topBottom: (prev: Coordinate) => (new Coordinate(prev.x + 1, prev.y + 1)),
      topLeft: (prev: Coordinate) => (new Coordinate(prev.x - 1, prev.y - 1)),
      bottomLeft: (prev: Coordinate) => (new Coordinate(prev.x + 1, prev.y - 1)),
    };
  }

  public init(): void {
    this.rows[3].cells[3].state = CellState.White;
    this.rows[3].cells[4].state = CellState.Black;
    this.rows[4].cells[3].state = CellState.Black;
    this.rows[4].cells[4].state = CellState.White;
  }

  private getCellByCoordinate(x: number, y: number) {
    return this.rows[x].cells[y];
  }

  static isInsideBoard(x: number, y: number): boolean {
    return (x < 8 && x >= 0) && (y < 8 && y >= 0);
  }

  private getFlippableCells(targetCell: Cell, stanbyPiece: CellState): Cell[] {
    const helper = (
      targetCoordinate: Coordinate,
      next: (prev: Coordinate) => Coordinate,
      list: Cell[],
    ): Cell[] => {
      const { x: nextX, y: nextY } = next(targetCoordinate);
      if (!Board.isInsideBoard(nextX, nextY)) {
        return [];
      }
      const nextCell = this.getCellByCoordinate(nextX, nextY);
      const nextCoordinate = new Coordinate(nextCell.x, nextCell.y);
      if (nextCell.state === CellState.None) return [];
      if (nextCell.state !== stanbyPiece) {
        list.push(nextCell);
        return helper(nextCoordinate, next, list);
      }
      return list;
    };
    let result: Cell[] = [];
    const targetCoordinate = new Coordinate(targetCell.x, targetCell.y);
    result = Object.keys(this.traverseSchema).reduce(
      (acc: Cell[], direction: keyof TraverseSchema) => [
        ...acc,
        ...helper(
          targetCoordinate,
          this.traverseSchema[direction],
          [],
        ),
      ], [],
    );
    return result;
  }

  private static flipCells(cells: Cell[], state: CellState): void {
    cells.forEach((cell: Cell) => {
      cell.state = state;
    });
  }

  private examineEveryCell(examiner: (cell: Cell, results: any) => void, results: any): void {
    const { rows } = this;
    for (let rowNum = 0; rowNum < rows.length; rowNum += 1) {
      const row: Row = rows[rowNum];
      for (let cellNum = 0; cellNum < row.cells.length; cellNum += 1) {
        const cell = row.cells[cellNum];
        examiner.call(this, cell, results);
      }
    }
  }

  static countPiecesByColor(cell: Cell, reulsts: PieceCountsByColor): void {
    if (cell.state !== CellState.None) {
      reulsts[cell.state] += 1;
    }
  }

  private isPlacableCell(cell: Cell, results: PieceCountsByColor): void {
    if (cell.state === CellState.None) {
      const flippableCellsForBlack: Cell[] = this.getFlippableCells(cell, CellState.Black);
      const flippableCellsForWhite: Cell[] = this.getFlippableCells(cell, CellState.White);
      if (flippableCellsForBlack.length > 0) {
        results[CellState.Black] += 1;
      }
      if (flippableCellsForWhite.length > 0) {
        results[CellState.White] += 1;
      }
    }
  }

  get placablePieceCountsByColor(): PieceCountsByColor {
    const results = {
      black: 0,
      white: 0,
    };
    this.examineEveryCell(this.isPlacableCell, results);
    return results;
  }

  get pieceCountsByColor(): PieceCountsByColor {
    const results = {
      black: 0,
      white: 0,
    };
    this.examineEveryCell(Board.countPiecesByColor, results);
    return results;
  }

  private next(): void {
    this.turn = this.turn === CellState.Black ? CellState.White : CellState.Black;
  }

  private unplacable(): boolean {
    if (this.turn === CellState.None) return true;
    const placableCells: PieceCountsByColor = this.placablePieceCountsByColor;
    if (placableCells[this.turn] === 0) {
      return true;
    }
    return false;
  }

  private gameSetMatch(): void {
    const placableCells: PieceCountsByColor = this.placablePieceCountsByColor;
    if (placableCells[CellState.Black] === 0 && placableCells[CellState.White] === 0) {
      this.end = true;
    }
  }

  public place(x: number, y: number): void {
    const pickedCell: Cell = this.rows[x].cells[y];
    const flippableCells: Cell[] = this.getFlippableCells(pickedCell, this.turn);
    if (!(pickedCell.state === CellState.None && flippableCells.length > 0)) return;
    pickedCell.state = this.turn;
    Board.flipCells(flippableCells, this.turn);
    this.next();
    this.gameSetMatch();
    if (this.unplacable()) {
      this.next();
    }
  }
}
