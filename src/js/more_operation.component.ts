import 'rxjs/add/operator/switchMap';
import {Directive, Component, Input, OnInit } from '@angular/core';
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
    @Input() id:number;
    tips: Tip[] = [];
    tip: Tip;
    tipEdit:number;
   
        constructor(
        private tipService: TipService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    editDetail(){
        this.tipEdit = this.id;
        console.log(this.tipEdit);
    }
    deleteTip(id: number){
        let tipId = this.id;
        this.tipService.deleteTip(tipId);
        //   .then(reload => window.location.reload());
    }
   ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.tipService.getTip(+params['id']))
    //   .subscribe(tip => this.tip = tip);
        this.tipService.reNew().then(reNewTip => {this.tip = new Tip;
            this.tip.id = this.tipEdit;
            console.log(this.tip.id);
      });
  }

}