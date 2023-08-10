import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forex'
})
export class ForexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
