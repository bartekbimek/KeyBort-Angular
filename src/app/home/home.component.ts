import { Component, OnInit } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastInput: string;
  resetKeys(){
    this.keyboardService.resetCheckedKeys();
  }
  getLastInput(x){
    this.keyboardService.setLastInput(x);
    this.lastInput = x;
  }

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.lastInput = this.keyboardService.getLastInput();
  }

}
