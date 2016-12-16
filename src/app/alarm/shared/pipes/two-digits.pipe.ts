import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {
  transform(input: number = 0): string {
    let output;
    if (input.toString().length >= 2) {
      output = `${input}`;
    } else {
      output = `0${input}`;
    }
    return output;
  }
}