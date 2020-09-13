import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  public displaySideBar = false;

  constructor() { }

  ngOnInit() {

  }

  toggleNavBar(): void {
    this.displaySideBar = !this.displaySideBar;
  }

}
