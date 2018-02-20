import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(value: Collegue[], arg1: string): Collegue[] {
    if(arg1 != ""){
      return value.filter(c => c.nom.toUpperCase().startsWith(arg1.toUpperCase()));
    }
    return value
  }
}
