import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService{
  constructor(private http:HttpClient){}

  messages = [];
  getMessage(){
    this.http.get("http://localhost:3000/posts").subscribe((res:any[]) => {
      this.messages = res;
      console.log(this.messages);
    })
  }
}
