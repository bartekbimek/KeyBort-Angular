import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent implements OnInit {
  checkedKeys:string[] = [];
  @Output() lastInputUpdate: EventEmitter<string> = new EventEmitter<string>();
  sendLastInput(value:string){
    this.lastInputUpdate.emit(value);
  }
  @HostListener('window:keydown', ['$event']) 
  onKeyDown(key){
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    let pressedKey = document.querySelector(`[key="${key.code}"]`)
    pressedKey.classList.remove("checked");
    pressedKey.classList.add("pressed");
    this.sendLastInput(key.key);
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(key){
    key.preventDefault ? key.preventDefault() : key.returnValue = false;
    let pressedKey = document.querySelector(`[key="${key.code}"]`)
    pressedKey.classList.remove("pressed");
    pressedKey.classList.add("checked");
    this.keyboardService.addCheckedKeys(key.code);
    if(key.code === "PrintScreen") this.sendLastInput(key.key);
  } 
  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.checkedKeys = this.keyboardService.getCheckedKeys();
  }
}
