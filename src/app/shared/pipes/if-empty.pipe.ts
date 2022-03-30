import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifEmpty',
})
export class IfEmptyPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value && value !== null && value !== '') {
      return value;
    } else {
      return '-';
    }
  }
}

