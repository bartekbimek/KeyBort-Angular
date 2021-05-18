import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  lightmode: string;
  themeSwitch() {
    if (localStorage.getItem("theme") == undefined || localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("darkmode")
      document.documentElement.classList.add("lightmode")

    }
    else {
      document.documentElement.classList.remove("lightmode")
      document.documentElement.classList.add("darkmode")
      localStorage.setItem("theme", "dark")
    }
  }
  constructor() { }

  ngOnInit(): void {

  }
}
