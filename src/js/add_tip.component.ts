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
  addTip: Tip;
  // reNew(){
  //   this.reNew = TodolistComponent.caller(reNew);
  // }
  constructor(private tipService: TipService) {
    
   }
  setTip(name: string, expirationTime:string, description:string){
    let notice = false;
    this.tipService.setTip(notice,name,expirationTime,description); 
    if(notice){
      this.addTip = new Tip;
    }
  }
  close(){
     this.addTip = new Tip;
  }
  ngOnInit(): void{
    // this.tip = tip;
    this.tipService.reNew().then(reNewTip => {this.addTip = new Tip;
      });;
  }
}