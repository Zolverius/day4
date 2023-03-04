import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {
    path:'homepage',component:HomepageComponent
    
  },
  {
    path:'about',component:AboutComponent
    
  },
  {
    path:'contact',component:ContactComponent
  },
  {

   path:'signup',component:SignupComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
