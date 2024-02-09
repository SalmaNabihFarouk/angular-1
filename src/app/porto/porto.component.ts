import { Component } from '@angular/core';

@Component({
  selector: 'porto',
  templateUrl: './porto.component.html',
  styleUrls: ['./porto.component.css']
})
export class porto {
imgsrc:string=""
imgd:boolean=true;
hi(e:any){
this.imgd=false;
console.log(e.target);
console.log(this.imgsrc=e.target.getAttribute("data-v"));

}
dnone(e:any){
  this.imgd=true;
  // console.log(e.target);
  // console.log("lll")
  //.style.display='none'
  
}
d(e:any){
e.stopPropagation();
}

}
