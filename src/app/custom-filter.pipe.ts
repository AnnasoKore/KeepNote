import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
 
  transform(val: any, searchType:any):any {
    return val.filter(function(titleSearch:{title:string}){
      return titleSearch.title.toLowerCase().indexOf(searchType.toLowerCase())>-1
    });
  }

}
