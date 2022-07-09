import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var header = document.querySelector('.header') as HTMLElement;
    var h1 = document.querySelector('h1') as HTMLElement;
    var h5 = document.querySelector('h5') as HTMLElement;

    if (
      document.body.scrollTop > 10 || document.documentElement.scrollTop > 10
    ) {
      header.style.height = "10%";
      h1.style.fontSize = "3em";
      h1.style.padding = ".15em 0 0 0";
      h5.style.fontSize = "1em";
    } else {
      header.style.height = "100%";
      h1.style.fontSize = "6em";
      h1.style.padding = "4em 0 0 0";
      h5.style.fontSize = "2em";
    }
  }
}
