import { Component } from '@angular/core';
import { SidebarControllerService } from './service/sidenavController/sidebar-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';
  constructor(public sidebarController: SidebarControllerService){

  }
}
