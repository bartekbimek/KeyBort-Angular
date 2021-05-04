import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @HostListener('window:keydown', ['$event'])
  onClickDown(key){
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    //console.log(key.key, key.keyCode, key.location)
    if(key.location == 0){
      let x = document.querySelector(`[key="${key.keyCode}"]`);
      x.classList.remove("checked");
      x.classList.add("pressed");
    }
    else{
      let x = document.querySelector(`[key="${key.keyCode}"][location="${key.location}"]`);
      x.classList.remove("checked");
      x.classList.add("pressed");
    }
  }
  @HostListener('window:keyup', ['$event'])
  onClickUp(key){
    console.log(key.key, key.keyCode, key.location);
    
    if(key.location == 0){
      let x = document.querySelector(`[key="${key.keyCode}"]`);
      x.classList.remove("pressed");
      x.classList.add("checked");
    }
    else{
      let x = document.querySelector(`[key="${key.keyCode}"][location="${key.location}"]`);
      x.classList.remove("pressed");
      x.classList.add("checked");
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
