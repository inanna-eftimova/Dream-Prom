import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from '../authentication/login-form/login-form.component';
import { RegisterFormComponent } from '../authentication/register-form/register-form.component';
import { CatalogPageComponent } from '../landing/catalog-page/catalog-page.component';
import { HomePageComponent } from '../landing/home-page/home-page.component';
import { LoginMessagePageComponent } from '../landing/login-message-page/login-message-page.component';
import { MyProfilePageComponent } from '../landing/my-profile-page/my-profile-page.component';
import { NotFoundPageComponent } from '../landing/not-found-page/not-found-page.component';
import { SearchPageComponent } from '../landing/search-page/search-page.component';
import { CreateFormComponent } from '../offers/create-form/create-form.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'create', component: CreateFormComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'profile', component: MyProfilePageComponent},
  {path: 'catalog', component: CatalogPageComponent},
  {path: 'shoudLogin', component: LoginMessagePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }