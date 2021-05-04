import { Component, HostListener, OnInit } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent implements OnInit {
  checkedKeys:string[] = [];

  @HostListener('window:keydown', ['$event']) 
  onKeyDown(key){
    console.log(key.code)
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    let pressedKey = document.querySelector(`[key="${key.code}"]`)
    pressedKey.classList.remove("checked");
    pressedKey.classList.add("pressed");
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(key){
    console.log(key.code)
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    let pressedKey = document.querySelector(`[key="${key.code}"]`)
    pressedKey.classList.remove("pressed");
    pressedKey.classList.add("checked");
    this.keyboardService.addCheckedKeys(key.code);
  } 
  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.checkedKeys = this.keyboardService.getCheckedKeys();
    this.checkedKeys.forEach((key) =>{
      document.querySelector(`[key="${key}"]`).classList.add("checked");
    })
  }
}
