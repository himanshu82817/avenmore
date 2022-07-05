import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContactForm = false;
  toggleContactForm(){
    this.showContactForm = !this.showContactForm;
  }

  title = 'avenmore';
}
