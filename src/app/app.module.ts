import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { DemoUsersComponent } from './components/demo-users.component';
import { DemoShopComponent } from './components/demo-shop.component';
import { ContactsComponent } from './components/contacts.component';
import { FormsModule } from '@angular/forms';
import { Contacts2waysComponent } from './components/contacts2ways.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DemoUsersComponent,
    DemoShopComponent,
    ContactsComponent,
    Contacts2waysComponent,
    StopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
