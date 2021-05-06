import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkmode:boolean = true;
  darkModeOn(){
    document.documentElement.classList.remove("lightmode");
    return this.darkmode = true;
  }
  darkModeOff(){
    document.documentElement.classList.add("lightmode");
    return this.darkmode = false;
  }
  constructor() { }
}
