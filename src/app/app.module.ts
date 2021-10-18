import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoUsersComponent } from './features/users/demo-users.component';
import { DemoShopComponent } from './features/shop/demo-shop.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { Contacts2waysComponent } from './features/contacts/contacts2ways.component';
import { StopPropagationDirective } from './shared/directives/stop-propagation.directive';
import { PostsComponent } from './features/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoUsersComponent,
    DemoShopComponent,
    ContactsComponent,
    Contacts2waysComponent,
    StopPropagationDirective,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
