import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private checkedKeys:string[] = [];
  private lastInput:string;
  getCheckedKeys(){
    this.checkedKeys.forEach((key) =>{
      document.querySelector(`[key="${key}"]`).classList.add("checked");
    });
    return this.checkedKeys;
  }
  addCheckedKeys(x:string){
    if(!this.checkedKeys.includes(x)){
      return this.checkedKeys.push(x);
    }
  }
  resetCheckedKeys(){
    this.checkedKeys.forEach((key) =>{
      document.querySelector(`[key="${key}"]`).classList.remove("checked");
    })
    return this.checkedKeys = [];
  }
  constructor() { }
}
