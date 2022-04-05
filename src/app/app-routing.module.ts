import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/authentication/login-form/login-form.component';
import { RegisterFormComponent } from './components/authentication/register-form/register-form.component';
import { CatalogPageComponent } from './components/landing/catalog-page/catalog-page.component';
import { HomePageComponent } from './components/landing/home-page/home-page.component';
import { LoginMessagePageComponent } from './components/landing/login-message-page/login-message-page.component';
import { MyProfilePageComponent } from './components/landing/my-profile-page/my-profile-page.component';
import { NotFoundPageComponent } from './components/landing/not-found-page/not-found-page.component';
import { SearchPageComponent } from './components/landing/search-page/search-page.component';
import { CreateFormComponent } from './components/offers/create-form/create-form.component';
import { AuthGuard } from './components/shared/guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'auth', children: [
     {path: 'create', component: CreateFormComponent},
     {path: 'search', component: SearchPageComponent},
     {path: 'profile', component: MyProfilePageComponent},
     {path: 'catalog', component: CatalogPageComponent},
  ], canActivate: [AuthGuard]},
  {path: 'shoudLogin', component: LoginMessagePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }