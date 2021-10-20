import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  label: string;
  description: string;
  cities: City[]
}

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-uikit-simple',
  template: `
    
    <app-tabbar
      [items]="countries"
      [active]="selectedCountry"
      (tabClick)="changeCountryHandler($event)"
    ></app-tabbar>

    <app-tabbar
      *ngIf="selectedCountry && selectedCountry.cities"
      [items]="selectedCountry.cities"
      [active]="selectedCity"
      (tabClick)="changeCityHandler($event)"
      labelField="name"
    ></app-tabbar>
    
    <img
      width="100%"
      *ngIf="selectedCity"
      [src]="'https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&center=' + selectedCity.name + '&size=600,400'" alt="">

    <hr>
    
    <app-card
      title="My Card"
      icon="fa fa-facebook"
      (iconClick)="doSomething()"
      [bottomMargin]="false"
    >
      <input type="text">
      <input type="text">
    </app-card>

    <app-card title="Profile">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aspernatur consequatur cupiditate esse magni
      officiis ut voluptate. Accusantium culpa enim error, iste nobis quia recusandae rem reprehenderit repudiandae ut!
      Sit.
    </app-card>

    <app-card [title]="'Ok success'" [type]="'danger'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aspernatur consequatur cupiditate esse magni
      officiis ut voluptate. Accusantium culpa enim error, iste nobis quia recusandae rem reprehenderit repudiandae ut!
      Sit.
    </app-card>
  `,
})
export class UikitSimpleComponent {
  countries: Country[] = []
  selectedCountry: Country | null = null;
  selectedCity: City | null = null;

  constructor() {
    setTimeout(() => {
      this.countries = [
        {
          id: 1,
          label: 'Italy',
          description: 'bla bla bla 1',
          cities: [
            { id: 1, name: 'Rome'},
            { id: 2, name: 'Milan'},
            { id: 3, name: 'Palermo'},
          ]
        },
        {
          id: 2,
          label: 'Germany',
          description: 'bla bla bla 2',
          cities: [
            { id: 11, name: 'Berlin'},
            { id: 22, name: 'Monaco'},
          ]
        },
        {
          id: 3,
          label: 'Spain',
          description: 'bla bla bla 3',
          cities: [
            { id: 31, name: 'Madrid'},
          ]
        },
      ];

      this.changeCountryHandler( this.countries[0] );

    }, 2000)
  }


  doSomething() {
    alert('do something')
  }

  changeCountryHandler(country: Country) {
    this.selectedCountry = country
    this.selectedCity = country.cities[0]
  }

  changeCityHandler(city: City) {
    this.selectedCity = city;
  }
}
/*
const tabbar = new TabbarComponent<Country>()
hello.name = 'Fabio'
hello.setName('Fabio')
*/
