import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu_options: Menu[] = [
    {
      name: 'Contracts',
      icon: 'fa-regular fa-user', 
      sub_items: [
        {name: 'Option 1'},
        {name: 'Option 2'},
        {name: 'Option 3'}
      ]
    },
    {
      name: 'Documents',
      icon: 'fa-regular fa-file-lines', 
      sub_items: [
        {name: 'Option 1'},
        {name: 'Option 2'},
      ]
    },
    {
      name: 'Payout',
      icon: 'fa-regular fa-credit-card', 
      sub_items: [
        {name: 'Option 1'},
        {name: 'Option 2'},
        {name: 'Option 3'}
      ]
    },
    {
      name: 'Time', 
      icon: 'fa-regular fa-calendar',
      sub_items: [
        {name: 'Option 1'},
        {name: 'Option 2'},
        {name: 'Option 3'}
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
