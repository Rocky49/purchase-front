import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  events: string[] = [];
  opened: boolean;
  role = sessionStorage.getItem('role');

  constructor() { }

  ngOnInit() {
  }

}
