import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
//ng serve -o
// ng g c lesson2 створення компонненти
  public name = 'Ivan';
  public age = 22;
  public isOnline = true;
  public users: Array<string> = ['Irina', 'Olga', 'Alina']
  public car = {mark: 'Hyundai', model: 'Tucson'}
  
  public urlName = 'google'
  public urlPass = 'http://www.google.com'

  constructor() { }

  ngOnInit(): void {
  }

  seyHello(): string{
    return `hello angular`
  }
}
