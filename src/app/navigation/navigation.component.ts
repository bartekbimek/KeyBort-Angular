import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  darkmode:boolean;
  themeSwitch(){
    this.darkmode ? this.darkmodeService.darkModeOff() : this.darkmodeService.darkModeOn();
    this.darkmode = this.darkmodeService.darkmode;
    console.log("current mode: " + (this.darkmodeService.darkmode == true ? "darkmode" : "lightmode"));
  }
  constructor(private darkmodeService:DarkmodeService) { }

  ngOnInit(): void {
    this.darkmode = this.darkmodeService.darkmode;
  }
}
