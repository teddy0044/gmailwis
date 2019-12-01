import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { ListingComponent } from './listing/listing.component';
import { CorpsmailComponent } from './corpsmail/corpsmail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    ListingComponent,
    CorpsmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, /* Adding Bootstrap */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
