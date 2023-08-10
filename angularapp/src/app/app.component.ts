
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency converter';
  Amount:any;
  opted:any;
  opted2:any;
  clicked=false;
  submit(){
    this.clicked=true;
  }
  change(){
    this.clicked=false;
  }
}