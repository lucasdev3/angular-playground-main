import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeviewComponent } from './views/homeview/homeview.component';
import { LoginviewComponent } from './views/loginview/loginview.component';

// sets up routes constant where you define your routes
const routes: Routes = [
    { path: '', component: HomeviewComponent },
    {path: 'auth/login', component: LoginviewComponent}
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }