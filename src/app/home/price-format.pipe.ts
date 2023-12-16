import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Logique de formatage du prix ici
    // Exemple: Ajoutez le symbole € à la fin du prix
    return value + ' €';
  }
}
