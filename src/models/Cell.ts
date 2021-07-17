import CellState from '@/types/CellState';

export default class Cell {
  public state: CellState = CellState.None;

  constructor(public x: number, public y: number) {}
}
