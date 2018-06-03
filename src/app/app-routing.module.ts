import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainForecastComponent } from './components/main-forecast/main-forecast.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
