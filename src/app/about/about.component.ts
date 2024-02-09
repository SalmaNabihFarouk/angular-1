import { Component } from '@angular/core';
 import { User } from '../user';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class about { 
  
  title = 's1';



 pro:number=5000;
  imgsr:string=""

  hi(){
 
  }


  bye(){
    if(this.pro<500){
this.pro=7000;
    }
    else{
      this.pro=21;
    }
  }


 u:User[]=[{name:"ddd",
 age:3},{name:"salma",age:5}]

 

  

}

