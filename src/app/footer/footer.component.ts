import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var footer = document.querySelector('.footer') as HTMLElement;

    if (
      document.body.scrollTop > 10 || document.documentElement.scrollTop > 10
    ) {
      footer.style.zIndex = "2";
      footer.style.visibility = "visible";
      footer.style.display = "block";
      footer.style.transitionDelay = "0.5s"
      footer.style.transitionDuration = "0.3s";
    } else {
      footer.style.zIndex = "-1";
      footer.style.transitionDelay = "0s";
      footer.style.transitionDuration = "0s";
    }
  }
}
