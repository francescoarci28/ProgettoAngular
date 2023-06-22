import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router, private keycloakService: KeycloakService) { }

  roles :string[]= [];
  isLogged = false;
  isAdmin =false;
  username : null | string= null;
  userID : number| null = null;
  public redirect(){
    this.router.navigate(["/login"])
  }


  public getUserInfo(){
    return this.keycloakService.loadUserProfile();
  }

  public redirectToProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }
  public logout() : void {
    this.isAdmin = false;
    this.isLogged =false;
    this.keycloakService.logout("http://localhost:4200/");
  }
  public getToken(): Promise<string>{
    return this.keycloakService.getToken();
  }

  public getRoles(): string[] {
    this.roles = this.keycloakService.getUserRoles();

    return this.roles;

  }


}

