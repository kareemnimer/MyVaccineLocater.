
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FAQComponent } from './faq/faq.component';
import { BookAppoinatmentComponent } from './book-appoinatment/book-appoinatment.component';
import { HomeComponent } from './Home/Home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DirectionComponent } from './direction/direction.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SearchForSpecVacComponent } from './search-for-spec-vac/search-for-spec-vac.component';
import { MapforallcenterComponent } from './mapforallcenter/mapforallcenter.component';
import { VaccineCentersComponent } from './vaccine-centers/vaccine-centers.component';
import { BookAppoSpcCenterComponent } from './book-appo-spc-center/book-appo-spc-center.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { HttpClientModule } from '@angular/common/http';





const appRoutes: Routes = [    
];


@NgModule({
  declarations: [
    AppComponent,
    FAQComponent,
    BookAppoinatmentComponent,
    HomeComponent,
    DirectionComponent,
    SearchForSpecVacComponent,
    MapforallcenterComponent,
    VaccineCentersComponent,
    BookAppoSpcCenterComponent,
    AddAlertComponent,
  
  ],
  
  imports: [
    
    BrowserModule,FormsModule,AppRoutingModule,NgbModule,Ng2SearchPipeModule,GoogleMapsModule,HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
   
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { 
  
}
