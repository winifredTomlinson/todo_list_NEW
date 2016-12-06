import { Component, Input, OnInit } from '@angular/core';
import { Tip } from './tip';
import { TipService } from './tip.service';
import { TodolistComponent } from './todo_list.component';
@Component({
  selector: 'add-tip',
  templateUrl: '/component/add_tip.component.html'
})
export class AddTipComponent implements OnInit {
  @Input()
  tips: Tip[] = [];
  tip: Tip;
  // reNew(){
  //   this.reNew = TodolistComponent.caller(reNew);
  // }
  constructor(private tipService: TipService) {
    console.log();
   }
  setTip(name: string, expirationTime:string, description:string){
    // this.tip = new Tip;
    this.tipService.setTip(name,expirationTime,description); 
  }
  ngOnInit(): void{
    // this.tip = tip;
    this.tip = new Tip;
    
  }
}