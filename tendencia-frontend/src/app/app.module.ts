import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NavMenuItemComponent} from './nav-menu-item/nav-menu-item.component';
import {ChartsModule} from 'ng2-charts';
import {ChartComponent} from './chart/chart.component';
import {NewChartDialogComponent} from './new-chart-dialog/new-chart-dialog.component';
import {NewValueDialogComponent} from './new-value-dialog/new-value-dialog.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatSelectModule, MatToolbarModule
} from '@angular/material';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'test1', component: NewChartDialogComponent},
  {path: 'test2', component: NewValueDialogComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavMenuItemComponent,
    ChartComponent,
    NewChartDialogComponent,
    NewValueDialogComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
