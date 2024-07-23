import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    return value.filter(v => v.age < 18);
  }

}
