import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images',
  pure: false
})
export class ImagesPipe implements PipeTransform {

  transform(value: any): any {
    let images = '../../../assets/';
    return images + value;
  }

}
