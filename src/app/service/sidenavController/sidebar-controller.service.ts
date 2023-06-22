import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarControllerService {


  constructor() { }
  sidebarStatus: boolean = true;
  sidebarStatusCart = false;
  toggleSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
  }
  toggleSidebarCart() {
    this.sidebarStatusCart = !this.sidebarStatusCart;
  }

}
