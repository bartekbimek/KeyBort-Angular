import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent implements OnInit {
  checkedKeys:string[] = [];
  lastInput:string;

  @HostListener('window:keydown', ['$event']) 
  onKeyDown(key){
    console.log(key.key)
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    let pressedKey = document.querySelector(`[key="${key.code}"]`)
    pressedKey.classList.remove("checked");
    pressedKey.classList.add("pressed");
    this.lastInput = key.key;
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(key){
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    let pressedKey = document.querySelector(`[key="${key.code}"]`)
    pressedKey.classList.remove("pressed");
    pressedKey.classList.add("checked");
    this.keyboardService.addCheckedKeys(key.code);
  } 
  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.checkedKeys = this.keyboardService.getCheckedKeys();
  }
}
