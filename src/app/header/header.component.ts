import { Component, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChildren('hamburger') hamburger: any;
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  responsiveMenuOpen = false;

  constructor(public router: Router) { }


  navigate(link: string) {
    this.router.navigateByUrl(link);
  }

  updateBtn() {
    console.log(this.hamburger);
    this.hamburger.forEach(button => {
      button = button.nativeElement;
      const currentState = button.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
    });
    this.responsiveMenuOpen = !this.responsiveMenuOpen;
    if (this.responsiveMenuOpen)
      this.sidenav.open();
    else
      this.sidenav.close();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
