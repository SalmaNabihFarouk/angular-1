import { about } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { porto } from './porto/porto.component';
import { contact } from './contact/contact.component';
import { start } from './start/start.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:"", redirectTo:"start",pathMatch:"full"},
  {path:"start",component:start},
  {path:"about",component:about},
  {path:"portfolio",component:porto},
  {path:"contact",component:contact},

  
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
