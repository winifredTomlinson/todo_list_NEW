import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


import { Tip } from './tip';
import { TipService } from './tip.service';
import { TodolistComponent } from './todo_list.component';
@Component({
    selector: 'more-oparetion',
    templateUrl: 'component/more_operation.component.html',
})


export class MoreOperationComponent implements OnInit{
    tips: Tip[] = [];
    tip: Tip;
        constructor(
        private tipService: TipService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    deleteTip(id: number){
        this.tipService.deleteTip(id);
        console.log(id);
        //   .then(reload => window.location.reload());
    }
   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tipService.getTip(+params['id']))
      .subscribe(tip => this.tip = tip);
  }

}