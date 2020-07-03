import { Component, OnInit } from '@angular/core';


export class Country {
  name: string;
  capital: string;
}


const COUNTRIES: Country[] = [
  { name: 'Нидерланды', capital: 'Амстердам' },
  { name: 'Греция', capital: 'Афины' },
  { name: 'Германия', capital: 'Берлин' },
  { name: 'Швейцария', capital: 'Берн' },
  { name: 'Словакия', capital: 'Братислава' },
  { name: 'Бельгия', capital: 'Брюссель' },
  { name: 'Венгрия', capital: 'Будапешт' },
  { name: 'Польша', capital: 'Варшава' },
  { name: 'Австрия', capital: 'Вена' },
  { name: 'Хорватия', capital: 'Загреб' },
  { name: 'Испания', capital: 'Мадрид' },
  ];

  
  

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countriesLIst: Country[] = COUNTRIES;
  selectedCountyCapital: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.countriesLIst)
  }

  onSelect(country: Country) {
    this.selectedCountyCapital = country.capital

  }

}
