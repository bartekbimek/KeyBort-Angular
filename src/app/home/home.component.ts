import { Component, OnInit, HostListener } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { KeyboardService } from '../services/keyboard.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastInput:string;
  resetKeys(){
    this.keyboardService.resetCheckedKeys();
  }
  @HostListener('window:keydown', ['$event'])
  addItem(newItem:string){
    this.lastInput = newItem;
    console.log("kruwa"+newItem);
  }
  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    
  }

}
