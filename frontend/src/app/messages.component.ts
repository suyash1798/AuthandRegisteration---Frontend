import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'MessageComponent',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <button mat-button>Click me!</button>
    <div *ngFor="let msg of apiService.messages">
      <mat-card>{{msg.message}}</mat-card>
    </div>


  `,
  styleUrls: ['./app.component.css']
})
export class MessageComponent {
  title = 'app';

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getMessage();
    console.log(this.apiService.messages);
  }
}
