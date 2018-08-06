import {ApiService} from "./api.service";
import {Component} from "@angular/core";

@Component({
  selector:'message',
  template:`<div *ngFor="let user of apiService.users">
    <mat-card [routerLink]="['/profile',user._id]">{{ user.email }}</mat-card>
  </div>
  `
})
export class UsersComponent{

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.apiService.getUsers();
  }
}
