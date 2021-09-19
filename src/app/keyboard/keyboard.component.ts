import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core'
import { KeyboardService } from '../services/keyboard.service'

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent implements OnInit {

  @Output() sendLastKey = new EventEmitter<string>()

  checkedKeys: string[];

  @HostListener('window:keydown', ['$event'])
  onKeyDown(currentKey) {
    currentKey.preventDefault ? currentKey.preventDefault() : currentKey.returnValue = false
    let pressedKey = document.querySelector(`[key="${currentKey.code}"]`)
    pressedKey.classList.remove("checked")
    pressedKey.classList.add("pressed")
    if (currentKey.code !== "PrintScreen") {
      this.updateService(currentKey)
    }
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(currentKey) {
    currentKey.preventDefault ? currentKey.preventDefault() : currentKey.returnValue = false
    let pressedKey = document.querySelector(`[key="${currentKey.code}"]`)
    pressedKey.classList.remove("pressed")
    pressedKey.classList.add("checked")
    if (currentKey.code === "PrintScreen") {
      this.updateService(currentKey)
    }
  }

  updateService(key) {
    this.keyboardService.addCheckedKeys(key)
    this.keyboardService.setLastKey(key.key)
    this.sendLastKey.emit(key.key)
  }

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.keyboardService.getCheckedKeys().subscribe((keysArray) => {
      keysArray.forEach((key) => {
        document.querySelector(`[key="${key}"]`).classList.add("checked");
        this.checkedKeys = keysArray;
      })
    })
  }
}
