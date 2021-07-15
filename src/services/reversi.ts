/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */

export enum CellState {
  White = 'white',
  Black = 'black',
  None = 'none',
}

export class Cell {
  public state: CellState = CellState.None;

  constructor(public x: number, public y: number) {}
}

export class Row {
  cells: Cell[];

  constructor(public x: number) {
    this.cells = [...Array(8).keys()].map((y) => new Cell(x, y));
  }
}

export class Coordinate {
  constructor(public x: number, public y: number) {}
}

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

export class Board {
  public rows: Row[];

  private traverseSchema: TraverseSchema;

  public turn: CellState = CellState.Black;

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
    this.rows[3].cells[3].state = CellState.Black;
    this.rows[3].cells[4].state = CellState.White;
    this.rows[4].cells[3].state = CellState.White;
    this.rows[4].cells[4].state = CellState.Black;
  }

  private getCellByCoordinate(x: number, y:number) {
    return this.rows[x].cells[y];
  }

  static isInsideBoard(x: number, y: number): boolean {
    return (x < 8 && x >= 0) && (y < 8 && y >= 0);
  }

  private flippableCells(targetCell: Cell): Cell[] {
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
      if (nextCell.state !== this.turn) {
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

  public place(x: number, y: number): void {
    const pickedCell: Cell = this.rows[x].cells[y];
    const flippableCells: Cell[] = this.flippableCells(pickedCell);
    if (!(pickedCell.state === CellState.None && flippableCells.length > 0)) return;
    pickedCell.state = this.turn;
    Board.flipCells(flippableCells, this.turn);
    this.turn = this.turn === CellState.Black
      ? CellState.White
      : CellState.Black;
  }
}
