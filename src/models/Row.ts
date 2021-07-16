import Cell from '@/models/Cell';

class Row {
  cells: Cell[];

  constructor(public x: number) {
    this.cells = [...Array(8).keys()].map((y) => new Cell(x, y));
  }
}

export default Row;
