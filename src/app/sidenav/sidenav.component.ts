import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../service/auth/auth.service';


interface menuItem{
  name:string;
  link:string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  menu:Array<menuItem>=[{name:"tablet",link:"tablet"},{name:"computer",link:"computer"},{name:"cellulare",link:"cellulare"}]
  menuAdmin:Array<menuItem>=[{name:"Aggiungi prodotto",link:"admin/prodotto/aggiungi"},{name:"Lista prodotti",link:"admin/prodotto/lista"}]

  constructor(public AuthService:AuthService, public keycloakService: KeycloakService){

  }
  logout(){
    //this.AuthService.logout();
    this.AuthService.logout();
  }
}
