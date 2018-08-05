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

const appRoutes = [
  {path:'register',component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
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
