import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isNull } from 'util';

@Pipe({
  name: 'recorteTextoPipe'
})

//Gracias stack overflow:
//https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2
export class RecorteTextoPipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}