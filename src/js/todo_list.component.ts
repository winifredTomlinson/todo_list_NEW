import { Component, OnInit } from '@angular/core';

import { Tip } from './tip';
import { TipService } from './tip.service';

@Component({
  selector: 'my-app',
  templateUrl: '/todo_list.component.html'
})
export class TodolistComponent implements OnInit {

  tips: Tip[] = [];

  constructor(private tipService: TipService) { }

  ngOnInit(): void{
    this.tipService.getTips().then(tips => this.tips = tips);
  }
}