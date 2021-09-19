import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  selectedColor(e){
    //remove border from not selected colors and add border to selected one
    let color = e.target.getAttribute("data-color");
    document.querySelectorAll<HTMLElement>('.color_box').forEach((box)=>{
      box.style.border = "0";
    })
    e.target.style.border = "3px solid white";
    document.documentElement.style.setProperty('--accent', `${color}`)
    localStorage.setItem("accent", color);
  }

  constructor() { }
  ngOnInit(): void {
    //get colorboxes on load
    const boxes = document.querySelectorAll<HTMLElement>('.color_box');
    boxes.forEach((box)=>{
      let boxColor = box.getAttribute("data-color");
      box.style.backgroundColor = boxColor;
      if(boxColor == localStorage.getItem("accent")){
        box.style.border = "3px solid white"
      }
    });
  }
}
