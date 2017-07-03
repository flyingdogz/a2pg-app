import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import { routing }        from './app.routing';

import { AuthGuard } from './auth.guard';

import { LoginBoxComponent } from './login-box.component';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
