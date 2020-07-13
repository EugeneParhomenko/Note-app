import { Component } from '@angular/core';

@Component({
  selector: 'edm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My NOTE';

  addFlag:boolean = false;

  public toggleFlag(flag:boolean){
    return flag = !flag;
  }
}
