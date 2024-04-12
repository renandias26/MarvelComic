import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'app';
  
  constructor(
    private sidebarService: SidebarService
  ) {}
  
  ngOnInit() {

  }

  toggleResize(width: number) {
    if (width <= 768) {
      this.sidebarService.collapsedSidebar = false;
      this.sidebarService.hideSideNav = true;
    } else {
      this.sidebarService.hideSideNav = false;
    }
  }

  
}
