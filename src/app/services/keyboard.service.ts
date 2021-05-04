import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private checkedKeys:string[] = [];
  getCheckedKeys(){
    return this.checkedKeys;
  }
  addCheckedKeys(x:string){
    if(!this.checkedKeys.includes(x)){
      return this.checkedKeys.push(x);
    }
  }
  resetCheckedKeys(){
    this.checkedKeys = [];
  }
  constructor() { }
}
