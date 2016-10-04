import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'formatLabel'})
export class FormatLabelPipe implements PipeTransform {
  transform(value: string) {
    var replacedValue = value.replace(/_[^_]/g, match => ' ' + match[1].toUpperCase());
    return value[0].toUpperCase() + replacedValue.substr(1);
  }
}

