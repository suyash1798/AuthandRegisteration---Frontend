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

  sendUserRegistration(regData){
    this.http.post("http://localhost:3000/register",regData).subscribe((res:any[]) => {
      this.messages = res;
      console.log(this.messages);
    })
  }

  loginUser(loginData){
    this.http.post("http://localhost:3000/login",loginData).subscribe((res:any[]) => {
      this.messages = res;
      localStorage.setItem('token',res.token);
      console.log(this.messages);
    })
  }

}
