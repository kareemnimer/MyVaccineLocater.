import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { BookAppoSpcCenterComponent } from './book-appo-spc-center/book-appo-spc-center.component';
import { BookAppoinatmentComponent } from './book-appoinatment/book-appoinatment.component';
import { DirectionComponent } from './direction/direction.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './Home/Home.component';
import { MapforallcenterComponent } from './mapforallcenter/mapforallcenter.component';
import { SearchForSpecVacComponent } from './search-for-spec-vac/search-for-spec-vac.component';
import { VaccineCentersComponent } from './vaccine-centers/vaccine-centers.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'SearchForSpecVacComponent', component: SearchForSpecVacComponent},
  { path: 'faq', component: FAQComponent },
  { path: 'book-appoinatment', component: BookAppoinatmentComponent },
  { path: 'BookAppoSpcCenterComponent', component: BookAppoSpcCenterComponent },
  { path: 'DirectionComponent', component: DirectionComponent},
  { path: 'MapforallcenterComponent', component: MapforallcenterComponent},
  { path: 'VaccineCentersComponent', component: VaccineCentersComponent},
  { path: 'AddAlertComponent', component: AddAlertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
