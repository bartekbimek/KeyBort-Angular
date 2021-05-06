import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private checkedKeys:string[] = []
  private lastKey:string;
  getCheckedKeys():Observable<string[]>{
    return of(this.checkedKeys)
  }
  addCheckedKeys(currentKey:string){
    if(!this.checkedKeys.includes(currentKey)){
        return this.checkedKeys.push(currentKey)
    }
  }
  resetCheckedKeys(){
    return this.checkedKeys = [], this.lastKey = null;
  }
  setLastKey(currentKey){
    return this.lastKey = currentKey;
  }
  getLastKey():Observable<string>{
    return of(this.lastKey)
  }
  constructor() { }
}
