import { ErrorHandler, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing,module';

import { AppComponent } from './app.component';
import { CustomRouteReuseStrategy } from './route0reuse-strategy';

@Injectable()
class MyErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    // do something with the exception
    alert(error);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
		{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
    },
	],
  bootstrap: [AppComponent],
})
export class AppModule {}
