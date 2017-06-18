import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { CursorDirective } from './cursor.directive';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AppRoutes } from './app.routes';
import { ErrorComponent } from './error/error.component';
import { Auth } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CursorDirective,
    OneComponent,
    TwoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [UserService, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
