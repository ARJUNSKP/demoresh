import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashearService {

  sdata="service data handiling "

  addingData(data:any){
    console.log(data);
    
  }

  constructor() { }
}
