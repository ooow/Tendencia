import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  charts = 'Charts';
  animalControl = new FormControl('');
  types = [
    {abbreviation: 'EUR', country: 'European Union', title: 'Euro', value: '57.2'},
    {abbreviation: 'USD', country: 'USA', title: 'US Dollar', value: '54.2'},
    {abbreviation: 'RUB', country: 'Russia', title: 'Russian Ruble', value: '1.01'},
    {abbreviation: 'AUD', country: 'Australia', title: 'Australian Dollar', value: '35.1'},
    {abbreviation: 'BYN', country: 'Belarussia', title: 'Belarussian Ruble', value: '33.2'},
    {abbreviation: 'GEL', country: 'Georgia', title: 'Lari', value: '20.1'},
    {abbreviation: 'HKD', country: 'China', title: 'Hong Kong Dollar', value: '43.2'},
    {abbreviation: 'UAH', country: 'Ukraine', title: 'Hryvnia', value: '2.01'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('/');
  }
}
