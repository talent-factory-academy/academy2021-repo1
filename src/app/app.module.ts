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
import { HelloComponent } from './shared/components/hello.component';
import { CardComponent } from './shared/components/card.component';
import { UikitSimpleComponent } from './features/uikit-simple/uikit-simple.component';
import { TabbarComponent } from './shared/components/tabbar.component';
import { PostsListComponent } from './features/posts/components/posts-list.component';
import { PostsFormComponent } from './features/posts/components/posts-form.component';
import { PostsErrorsComponent } from './features/posts/components/posts-errors.component';
import { ModalComponent } from './shared/components/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoUsersComponent,
    DemoShopComponent,
    ContactsComponent,
    Contacts2waysComponent,
    StopPropagationDirective,
    PostsComponent,
    HelloComponent,
    CardComponent,
    UikitSimpleComponent,
    TabbarComponent,
    PostsListComponent,
    PostsFormComponent,
    PostsErrorsComponent,
    ModalComponent,
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
