import { CommonModule } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon?: IconProp;
  collapseMenu: IconProp = faBars;

  constructor(

  ) {
  }

  ngOnInit(): void {
  }

  getFirstLetterUser(username: string) {
    return username.charAt(0);
  }


}