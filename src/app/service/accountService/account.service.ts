import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userUri="http://localhost:8081/user";

  constructor(private http:HttpClient) { }


  public registrazione(user:string){
    return this.http.post(this.userUri+"/register?username="+user,{});
  }
}
