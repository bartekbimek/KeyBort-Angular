import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @HostListener('window:keydown', ['$event'])
  onClickDown(event){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    console.log(document.querySelectorAll(`[key="${event.keyCode}"]`)[0]);
    let x = document.querySelectorAll(`[key="${event.keyCode}"]`);
    for(let i = 0; i<x.length; i++){
      x[i].classList.remove("checked");
      x[i].classList.add("pressed");
    }  
  }
  @HostListener('window:keyup', ['$event'])
  onClickUp(event){
    console.log(document.querySelectorAll(`[key="${event.keyCode}"]`)[0]);
    let x = document.querySelectorAll(`[key="${event.keyCode}"]`);
    for(let i = 0; i<x.length; i++){
      x[i].classList.remove("pressed");
      x[i].classList.add("checked");
    }  
  }

  constructor() { }

  ngOnInit(): void {
  }
}
