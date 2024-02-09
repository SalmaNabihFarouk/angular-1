import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class contact {
inp:boolean=true;


input(){
  this.inp=false;
}
}
