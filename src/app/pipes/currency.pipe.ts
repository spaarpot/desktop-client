import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, args?: any): string {
      if (!value && value !== 0) {
          return `-`;
      }

      return `${value.toFixed(2)} €`;
  }

}
