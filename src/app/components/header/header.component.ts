import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon?: IconProp;
  collapseMenu: IconProp = faBars;

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  getFirstLetterUser(username: string) {
    return username.charAt(0);
  }


  logout() {
    // this.auth.logout().subscribe();
    // this.auth.clearCacheAuth();
    // this.http.token = '';
    this.router.navigate(['/login']);
  }
}
