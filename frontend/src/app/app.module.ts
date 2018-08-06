import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from "./api.service";

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MessageComponent} from "./messages.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {UsersComponent} from "./users.component";

const appRoutes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'profile/:id',component:UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
