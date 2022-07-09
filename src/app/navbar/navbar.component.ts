import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var navbar = document.querySelector('.navbar') as HTMLElement;

    if (
      document.body.scrollTop > 10 || document.documentElement.scrollTop > 10
    ) {
      navbar.style.zIndex = "2";
      navbar.style.visibility = "visible";
      navbar.style.display = "flex";
      navbar.style.transitionDelay = "0.5s"
      navbar.style.transitionDuration = "0.3s";
    } else {
      navbar.style.zIndex = "-1";
      navbar.style.transitionDelay = "0s";
      navbar.style.transitionDuration = "0s";
    }
  }

}
