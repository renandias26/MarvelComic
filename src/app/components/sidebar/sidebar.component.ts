import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';
import { PAGES } from '../../helpers/pages';
import { IPages } from '../../interfaces/pages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  pages: IPages[] = PAGES;
  closeIcon: IconProp = faTimes;
  doubleLeftIcon: IconProp = faAngleDoubleLeft;

  constructor(
    private router: Router,
    public sidebar: SidebarService
    ) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  showPages(): IPages[] {
      return this.pages;
  }

}
