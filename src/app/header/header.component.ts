import { Component, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('hamburger') hamburger: any;
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  responsiveMenuOpen = false;
  has100vh = false;

  constructor(public router: Router) { }


  navigate(link: string) {
    this.router.navigateByUrl(link);
  }

  updateNav() {
    this.updateBtn();
    this.updateNavBar();
  }

  updateBtn(){
    let button = this.hamburger.nativeElement;
    const currentState = button.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  }

  updateNavBar(){
    this.responsiveMenuOpen = !this.responsiveMenuOpen;
    if (this.responsiveMenuOpen)
      this.openSidenav();
    else
      this.closeSidenav();
  }

  openSidenav(){
    this.has100vh = true;
    this.sidenav.open();
  }

  closeSidenav(){
    this.sidenav.close();
    setTimeout(() => this.has100vh = false, 400);
  }
}
