import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/components/navbar.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { Theme, ThemeService } from './core/services/theme.service';
import { LogService } from './core/services/log.service';
import { FakelogService } from './core/services/fakelog.service';
import { environment } from '../environments/environment';


/*export class MyCOnfigService {
  data;

  constructor(private http: HttpClient) {
  }
  load() {

    // ...

    this.data = res;
  }
}
function onAppInit(configService: MyCOnfigService): Promise<any> {
    return configService.load()
}*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [
    ThemeService,
    /*{
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [MyCOnfigService]
    },*/
    {
      provide: LogService,
      useFactory: (http: HttpClient, themeService: ThemeService) => {
        // return environment.production ? new LogService() : new FakelogService()
        return environment.production ? new LogService(http, 1) : new LogService(http, 0)
      },
      deps: [HttpClient, ThemeService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
