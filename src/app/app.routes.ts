import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './Masters/Admin/AddProduct/AddProduct.component';
import { LandingComponent } from './Pages/Landing/Landing.component';
import { ListProductsComponent } from './Masters/Product/ListProducts/ListProducts.component';
import { ListAdminProductsComponent } from './Masters/Admin/ListProducts/ListAdminProducts.component';
import { ProductDetailComponent } from './Masters/Product/ProductDetail/ProductDetail.component';
import { LoginComponent } from './Pages/Login/Login.component';
import { register } from 'module';
import { RegisterComponent } from './Pages/Register/Register.component';


export const routes: Routes = [
    {path:"",component:LandingComponent},

    {path:"AddProduct",component:AddProductComponent},
    
    {path:"ListProduct/:id",component:ListProductsComponent},

    {path:"ListAdminProduct",component:ListAdminProductsComponent},

    {path:"ProductDetail/:id",component:ProductDetailComponent},

    {path:"EditProduct/:id",component:AddProductComponent},

    {path:"Login",component:LoginComponent},

    {path:"Register",component:RegisterComponent},

    { path: 'master', loadChildren: () => import('./Masters/Master.module').then(m => m.MasterModule) }
];

