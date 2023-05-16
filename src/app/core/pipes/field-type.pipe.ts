import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldType'
})
export class FieldTypePipe implements PipeTransform {

  transform(value: string): string {
    let returnedString = '';
    switch (value) {
      case 'TEXT':
        returnedString = 'Textanfrage';
        break;
      case 'DATE':
        returnedString = 'Datumsanfrage'
        break;
      case 'NUMBER':
        returnedString = 'Zahlanfrage'
    }

    return returnedString;
  }

}
