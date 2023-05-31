import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldType',
})
export class FieldTypePipe implements PipeTransform {
  transform(value: string): string {
    let returnedString = '';
    switch (value) {
      case 'TEXT':
        returnedString = 'Textanfrage';
        break;
      case 'DATE':
        returnedString = 'Datumsanfrage';
        break;
        case 'TIME':
          returnedString = 'Uhrzeitanfrage';
          break;
      case 'NUMBER':
        returnedString = 'Zahlanfrage';
        break;
      case 'DATE_TIME':
        returnedString = 'Datum- und Zeitanfrage';
        break;
      case 'SINGLE_CHOICE':
        returnedString = 'Single-Choice-Anfrage';
        break;
        case 'MULTIPLE_CHOICE':
          returnedString = 'Multiple-Choice-Anfrage';
          break;
      case 'YES_NO':
        returnedString = 'Ja/Nein Anfrage';
        break;
    }

    return returnedString;
  }
}
