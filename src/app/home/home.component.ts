import { Component, OnInit, HostListener } from '@angular/core'
import { Observable } from 'rxjs';
import { KeyboardService } from '../services/keyboard.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastInput:string;
  getLastKey(lastKey){
    this.lastInput = lastKey;
  }
  resetKeys(){
    document.querySelectorAll(".checked").forEach(key => {
      key.classList.remove("checked")
    })
    this.keyboardService.resetCheckedKeys()
  }

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.keyboardService.getLastKey().subscribe((key) => {
      this.lastInput = key;
    })
  }
}
