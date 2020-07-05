import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: PageComponent,
    data:
    {
      page: 'home'
    }
  },
  {
    path: 'about', 
    component: PageComponent, 
    data: 
    {
      page: 'about'
    }
  },
  {
    path: 'contact', 
    component: PageComponent,
    data: {
      page: 'contact'
    }
  },
  {
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
