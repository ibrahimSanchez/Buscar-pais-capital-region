import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Europe', 'Asia', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }



  searchByRegion(region: Region): void {

    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
      .subscribe(country => {
        this.countries = country;
        this.isLoading = false;
      })
  }

}
