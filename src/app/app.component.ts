import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lessons';
  myNumber!: number
  public parentMessage!: string
  public count =1 

  send(): void{
    this.parentMessage = 'message from parent'
  }
  getOutputData(data:number):void{
    this.myNumber=data;
  }
  changeStatus(status:boolean):void{
    if(status){
      ++this.count
    }
    else(
      --this.count
    )
  }
 
}
