import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit():void{
  //theme localstorage
    if(localStorage.getItem("theme") == "light"){
      document.documentElement.classList.remove("darkmode")
      document.documentElement.classList.add("lightmode")
    }
    else{
      document.documentElement.classList.remove("lightmode")
      document.documentElement.classList.add("darkmode")
    }
  //accent localstorage
    //default => blue
    if(!localStorage.getItem("accent")){
      document.documentElement.style.setProperty('--accent','#0e77da')
    }
    else{
      let x = localStorage.getItem("accent");
      document.documentElement.style.setProperty('--accent', x)
    }
  }
}
