import { Component, OnInit, HostListener } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';
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
    this.lastInput = x;
  }

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    
  }

}
