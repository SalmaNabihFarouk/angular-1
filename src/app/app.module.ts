import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { about } from './about/about.component';
import { navbar } from './navbar/navbar.component';
import { porto} from './porto/porto.component';
import { contact } from './contact/contact.component';
import { start } from './start/start.component';
import { footer } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    about,
    navbar,
    porto,
    contact,
    start,
    footer,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
