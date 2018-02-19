import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((c,v) =>  v.score - c.score)
  }

}
