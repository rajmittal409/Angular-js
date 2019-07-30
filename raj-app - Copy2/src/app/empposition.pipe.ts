import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empposition'
})
export class EmppositionPipe implements PipeTransform {

  transform(value: number): string {
    if(value>=100 && value<200)
    return 'Manager';
    else
    return ' Assistant Manager';
  }

}
