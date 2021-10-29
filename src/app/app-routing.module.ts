import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './core/router/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
      },
      { path: 'shop', loadChildren: () => import('./features/shop/shop.module').then(m => m.DemoShopModule) },
      { path: 'shop/:productID', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
      { path: 'posts', loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule) },
      {
        path: 'uikit',
        loadChildren: () => import('./features/uikit/uikit.module').then(m => m.UikitModule),
        data: { edit: true},
        canActivate: [AuthGuard],

      },
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
      },
      { path: 'contacts', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) },
      { path: 'contacts2ways', loadChildren: () => import('./features/contacts/contacts2ways.module').then(m => m.Contacts2waysModule) },

      {
        path: 'welcome',
        loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule) ,

      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
      { path: 'games', loadChildren: () => import('./features/games/games.module').then(m => m.GamesModule) },
      { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
      { path: 'demo-service', loadChildren: () => import('./features/demo-service/demo-service.module').then(m => m.DemoServiceModule) },
      { path: '**', redirectTo: ''},
    ])
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
