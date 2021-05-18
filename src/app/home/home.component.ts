import { Component, OnInit } from '@angular/core'
import { KeyboardService } from '../services/keyboard.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastInput:string;
  test:string;
  getLastKey(lastKey){
    lastKey == " " ? this.lastInput = "Space" : this.lastInput = lastKey
  }
  resetKeys(){
    document.querySelectorAll(".checked").forEach(key => {
      key.classList.remove("checked")
    })
    this.lastInput = null;
    this.keyboardService.resetCheckedKeys()
  }

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.keyboardService.getLastKey().subscribe((key) => {
      this.lastInput = key;
    })
  }
}
