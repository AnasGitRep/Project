import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagesRoutes} from './Pages.routes';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { HeaderComponent } from '../Layouts/Header/Header.component';
import { FooterComponent } from '../Layouts/Footer/Footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './Landing/Landing.component';


@NgModule({
  declarations: [
  
  
  ],
  imports: [
    RouterModule,
    NgxCountriesDropdownModule,
    RouterModule.forChild(PagesRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
})
export class AppModule { }
