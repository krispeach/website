import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.scss']
})
export class TshirtComponent {

  constructor() { }

  @HostListener('window:load', ['$event'])
  onWindowLoad() {

  }
}
