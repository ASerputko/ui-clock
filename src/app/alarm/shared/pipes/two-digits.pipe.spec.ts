/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TwoDigitsPipe } from './two-digits.pipe';

describe('Pipe: TwoDigitsPipe', () => {
  it('create an instance', () => {
    let pipe = new TwoDigitsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should add `0` to the beginning of the input if the input have only 1 digit', () => {
    let result;
    let pipe = new TwoDigitsPipe();
    
    result = pipe.transform(0);
    expect(result).toEqual('00');

    result = pipe.transform(5);
    expect(result).toEqual('05');

    result = pipe.transform(9);
    expect(result).toEqual('09');
  });

  it('should NOT add `0` to the beginning of the input if the input have 2 or more digits', () => {
    let result;
    let pipe = new TwoDigitsPipe();
    
    result = pipe.transform(10);
    expect(result).toEqual('10');

    result = pipe.transform(30);
    expect(result).toEqual('30');

    result = pipe.transform(59);
    expect(result).toEqual('59');

    result = pipe.transform(100);
    expect(result).toEqual('100');

    result = pipe.transform(1000);
    expect(result).toEqual('1000');
  });
});
