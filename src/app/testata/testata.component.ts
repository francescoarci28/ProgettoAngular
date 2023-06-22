import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarControllerService } from '../service/sidenavController/sidebar-controller.service';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-testata',
  templateUrl: './testata.component.html',
  styleUrls: ['./testata.component.css']
})
export class TestataComponent {
  public searchValue:string = "";
  constructor(public sidebarController: SidebarControllerService, public authService : AuthService){

  }
}
