import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { IConfig, NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { LandingComponent } from './Pages/Landing/Landing.component';
import { routes } from './app.routes';
import { HeaderComponent } from './Layouts/Header/Header.component';
import { FooterComponent } from './Layouts/Footer/Footer.component';
import { AuthService } from './services/Auth.service';
@Component({
  standalone:true,

  imports:[NgxCountriesDropdownModule,LandingComponent,RouterOutlet,HeaderComponent,FooterComponent],
  providers:[AuthService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
      title = 'Project';

      selectedCountryConfig: IConfig = {
        hideCode: true,
        hideName: true
      };
      countryListConfig: IConfig = {
        hideCode: true,
        
      };
      onCountryChange(country: any) {
        console.log(country);
      }
}
