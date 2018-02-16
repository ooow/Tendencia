import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss']
})
export class NavMenuItemComponent implements OnInit {
  @Input() title;
  isVisible = false;
  arrow = this.isVisible ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  items = [
    'Liam',
    'Noah',
    'Mason',
    'Ethan',
    'Logan',
    'Lucas',
    'Emma',
    'Olivia',
    'Ava',
    'Sophia',
    'Isabella',
    'Mia'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isVisible = !this.isVisible;
    this.arrow = this.isVisible ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  }

  selectItem(item) {
    console.log(item);
  }
}
