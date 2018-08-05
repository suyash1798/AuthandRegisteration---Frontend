import {Component} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
  selector:'register',
  template:`
 <mat-card>
   <mat-card-header>
     <mat-card-title>
       <h3>Register Yourself</h3>
     </mat-card-title>
   </mat-card-header>
   <mat-card-content>
     <form class="example-form">
       <mat-form-field class="example-full-width">
         <input matInput [(ngModel)]="registerData.email" name="email" placeholder="Email">
       </mat-form-field>

       <mat-form-field class="example-full-width">
         <input matInput [(ngModel)]="registerData.password" name="password" placeholder="password" type="password">
       </mat-form-field>
       <button mat-raised-button (click)="logIt()">Register</button>
     </form>
   </mat-card-content>
 </mat-card>
  `,
})
export class RegisterComponent{
  registerData = {};

  constructor(private apiService:ApiService){}
  logIt(){
    this.apiService.sendUserRegistration(this.registerData);
  }
}
