import { Country } from './../../interfaces/country';
import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];


  constructor( private countriesService: CountriesService ) {}

  searchByCapital( term: string ): void {

    this.countriesService.searchCapital( term )
    .subscribe( country => this.countries = country )
  }

}
