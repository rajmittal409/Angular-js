import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe1'
})
export class Userpipe1Pipe implements PipeTransform {

  transform(value: string, gender:string): string {
    if(gender.toLowerCase()=='male'){
      return "Mr."+value;}
      else{
        return "Miss."+value;}
      
      }
    }
  
