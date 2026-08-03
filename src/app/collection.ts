import { Iproduct } from './core/models/interfaces/IProduct.js';
class Collection<T> {
  private col: T[] = [];

  constructor(items: T[] = []) {
    this.col = items;
  }

  getAllElements(): T[] {
    return this.col;
  }

  getEl(index: number) {
    return this.col[index];
  }

  clearCol() {
    this.col = [];
  }

  deleteEl(index: number) {
    this.col.splice(index, 1);
  }

  replaceEl(index: number, newEl: T) {
    this.col[index] = newEl;
  }
}

const firstCol = new Collection<number>([1, 2, 3, 4, 5, 6]);
console.log(firstCol.getAllElements());
console.log(firstCol.getEl(1));
// console.log(firstCol.clearCol());
console.log(firstCol.deleteEl(3));
console.log(firstCol.getAllElements());
console.log(firstCol.replaceEl(4, 12));
console.log(firstCol.getAllElements());

const secondCol = new Collection<Iproduct>([
  {
    name: 'Шоколад',
    price: 120,
  },
  {
    name: 'Ананас',
    price: 360,
  },
]);
console.log(secondCol.getAllElements());
