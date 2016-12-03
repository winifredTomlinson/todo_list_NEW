import { Component, OnInit } from '@angular/core';

import { Tip } from './tip';
import { TipService } from './tip.service';

@Component({
  selector: 'my-app',
  templateUrl: '/todo_list.component.html'
})
export class TodolistComponent implements OnInit {

  tips: Tip[] = [];
  tip: Tip;
  constructor(private tipService: TipService) { }
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