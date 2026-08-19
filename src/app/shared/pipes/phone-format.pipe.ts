import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(
    phone: string,
    mode: 'compact' | 'international' | 'national' | 'masked',
  ): string {
    const filteredPhone = phone
      .split('')
      .filter((el) => '0123456789'.includes(el))
      .join('');
    if (mode === 'compact') {
      return `+${filteredPhone}`;
    } else if (mode === 'international') {
      return `+${filteredPhone.slice(0, 2)} ${filteredPhone.slice(2, 5)} ${filteredPhone.slice(5, 8)} ${filteredPhone.slice(8, 10)} ${filteredPhone.slice(10, 12)}`;
    } else if (mode === 'national') {
      return `${filteredPhone.slice(0, 3)} ${filteredPhone.slice(3, 6)} ${filteredPhone.slice(6, 8)} ${filteredPhone.slice(8, 10)}`;
    } else {
      return `+${filteredPhone.slice(0, 2)} ${filteredPhone.slice(2, 5)} ${filteredPhone
        .slice(5, 8)
        .split('')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map((el) => (el = '*'))
        .join('')} ${filteredPhone
        .slice(8, 10)
        .split('')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map((el) => (el = '*'))
        .join('')} ${filteredPhone.slice(-2)}`;
    }
  }
}
