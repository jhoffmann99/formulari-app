import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'options'
})
export class OptionsPipe implements PipeTransform {

  transform(value: string): string[] {
    return value.split(';');
  }

}
