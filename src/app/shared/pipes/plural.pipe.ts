import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
})
export class PluralPipe implements PipeTransform {
  transform<T extends string | number>(
    num: T,
    word1: 'пользователь',
    word2: 'пользователя',
    word3: 'пользователей',
  ) {
    if (num == 11 || num == 12 || num == 13 || num == 14) return `${num} ${word3}`;
    if (num.toString().split('').slice(-1).join('') === '1' && num != 11) return `${num} ${word1}`;
    if (
      num.toString().split('').slice(-1).join('') === '2' ||
      num.toString().split('').slice(-1).join('') === '3' ||
      (num.toString().split('').slice(-1).join('') === '4' && num != 12 && num != 13 && num != 14)
    )
      return `${num} ${word2}`;
    else return `${num} ${word3}`;
  }
}
