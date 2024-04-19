import { CommonModule } from '@angular/common';
import  {MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, MatTooltipModule, MatIconModule]
})
export class InputComponent implements OnInit {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() inputModel?: string = '';
  @Input() backgroundWhite: boolean = true;
  @Input() isPassword: boolean = false;
  @Input() dataCy: string = '';
  @Input() mask?: string;
  @Input() maxLengthInput?: number;
  @Input() isRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Input() viewChild: string = '';
  @Input() suffix?: string;
  @Input() labelToolTipText: string = '';
  @Input() searchIcon: boolean = false;

  showPassword: boolean = this.isPassword;
  faInfoCircle: IconProp = faInfoCircle;
  faSearch: IconProp = faSearch;

  @Output() inputModelChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
