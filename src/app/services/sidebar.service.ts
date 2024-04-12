import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  collapsedSidebar: boolean = false;
  hideSideNav: boolean = false;


  constructor() {
    
  }

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
