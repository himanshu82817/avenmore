import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  processing = true
  constructor(){
    setTimeout(() => {
      this.processing = false
    },2000);
  }

  



  showContactForm = false;
  toggleContactForm(){
    this.showContactForm = !this.showContactForm;
  }

  title = 'avenmore';
}
