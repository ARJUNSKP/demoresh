import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashearService } from '../service/datashear.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  serivcedata:any=""
  constructor(private rout:Router,private rd:DatashearService){

  }
  ngOnInit(): void {
    this.serivcedata=this.rd.sdata
  }

  username="username"
  pname="username2"
  m1:any = "";
  userin:string="";
  psw:string=""

  serviselogin(){
    this.rd.addingData("Arjun")
  }
  user(event:any){
    console.log(event.target.value);
  }
  pass(event:any){
    // console.log(event.target.value);
    this.m1=event.target.value;
    

  }
  login(){
    alert(this.pname);
  }
  user1(a:any){
    console.log(a.value); 
  }
  storevariable(){
    console.log(this.userin);
    console.log(this.psw);
  }
  buttonrouting(){
    this.rout.navigateByUrl("signup")
  }
}
