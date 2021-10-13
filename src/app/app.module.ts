import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { DemoUsersComponent } from './components/demo-users.component';
import { DemoShopComponent } from './components/demo-shop.component';
import { ContactsComponent } from './components/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DemoUsersComponent,
    DemoShopComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
