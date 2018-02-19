import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-chart-dialog',
  templateUrl: './new-chart-dialog.component.html',
  styleUrls: ['./new-chart-dialog.component.scss']
})
export class NewChartDialogComponent {
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  generateNewChart() {
    console.log('new chart generated :)');
  }
}
