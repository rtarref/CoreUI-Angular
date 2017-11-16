import { Component } from '@angular/core';

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {

  showLoading: boolean = false;

  constructor() { }

  submitAction() {
    this.showLoading = true;

    setTimeout( () => {
      this.showLoading = false;
    }, 1000);
  }

}
