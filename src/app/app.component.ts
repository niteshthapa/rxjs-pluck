import { Component,OnInit } from '@angular/core';
import { from, interval ,Subscription} from 'rxjs';
import {map, pluck} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arr=[
    {name:"Nitesh",age:33}, {name:"Sadne",age:23}
  ]
  ngOnInit() {
 
 from(this.arr).pipe(
   pluck('name')
 ).subscribe(result=>  this.addStream(result,'container2'))
  }
  addStream(value,id){
    let el = document.createElement("li");
    el.classList.add("list-group-item");
    el.innerText = value;
    document.getElementById(id).appendChild(el)
}
}
