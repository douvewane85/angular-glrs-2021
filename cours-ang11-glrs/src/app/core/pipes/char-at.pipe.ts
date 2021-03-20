import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charAt'
})
export class CharAtPipe implements PipeTransform {
//Bonjour(7) => pos  => 0 ..6
  transform(value: string, ...args: number[]): string {

       if(args && args[0]<value.length)
        return value.charAt(args[0]);
      
        return value.charAt(0)
  }

}
