import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forex'
})
export class ForexPipe implements PipeTransform {
  transform(Amount:number,opted:any,opted2:any): any {
    if (!opted || !opted2) {
      return Amount;
    }
    else {
    return (Amount *opted2 / opted)}
  }

}