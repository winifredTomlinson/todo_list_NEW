import {Directive, Component, OnInit,Input } from '@angular/core';

import { Tip } from './tip';
import { TipService } from './tip.service';
// @Component({
//     selector: 'child',
//     template: `
//         <h2>child {{content}}</h2>
//     `
// })
class Child {
    @Input() id:number;
}

@Directive({
  selector: '[child]'
})
@Component({
  selector: 'my-app',
  templateUrl: '/todo_list.component.html',
})

export class TodolistComponent implements OnInit {

  tips: Tip[] = [];
  tip: Tip;
  editId: number;
  constructor(private tipService: TipService) { }
  getId(id: number){
    this.editId = id;
    console.log(this.editId);
  }
  reNew(){
    this.tipService.reNew();
  }
  clickCheckBox(id: number){
    this.tipService.clickCheckBox(id);
  }

  ngOnInit(): void{
    this.tipService.getTips().then(tips => {this.tips = tips
      });
      // this.tipService.clickCheckBox(Tip.id);
    // this.tipService.getTip(1);
     
  }
}