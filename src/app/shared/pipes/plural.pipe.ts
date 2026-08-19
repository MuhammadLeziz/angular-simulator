import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
})
export class PluralPipe implements PipeTransform {
  transform<T extends string | number>(
    num: T,
    word1: string,
    word2: string,
    word3: string,
  ): string {
    const number = Number(num);
    if (isNaN(number)) return `${num} ${word3}`;
    const last2 = Math.abs(number) % 100;
    const last1 = Math.abs(number) % 10;
    if (last2 === 11 || last2 === 12 || last2 === 13 || last2 === 14)
      return `${num} ${word3}`;
    if (last1 === 1) return `${num} ${word1}`;
    if (last1 === 2 || last1 === 3 || last1 === 4) return `${num} ${word2}`;
    else return `${num} ${word3}`;
  }
}
