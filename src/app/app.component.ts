import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IPages } from './interfaces/ipages';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { PAGES } from './helpers/pages';
import { faAngleDoubleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from './services/sidebar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, CommonModule, AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pages: IPages[] = PAGES;
  closeIcon: IconProp = faTimes;
  doubleLeftIcon: IconProp = faAngleDoubleLeft;

  constructor(
    public sidebar: SidebarService
    ) { }


  showPages(): IPages[] {
      return this.pages;
  }
  title = 'marvelComics';
}
