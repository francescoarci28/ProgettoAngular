import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcquistoService {

  constructor(private http:HttpClient, public authService: AuthService) {}

  public getAcquisti():Observable<any>{
    return this.http.get("http://localhost:8081/acquisti/byuser?username="+this.authService.username);
  }
}
