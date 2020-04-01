import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 data = {
    "title" : 'malik Awais'
  }
myFun(myTitle){
  this.data.title=myTitle;
}
}
