import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterRoutes, } from './Master.routes';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { HeaderComponent } from '../Layouts/Header/Header.component';
import { FooterComponent } from '../Layouts/Footer/Footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(MaterRoutes),
    NgxCountriesDropdownModule,
     
  ],
  providers: [],
})
export class MasterModule { }
