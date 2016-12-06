import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


import { Tip } from './tip';
import { TipService } from './tip.service';
@Component({
    selector: 'my-app',
    templateUrl: 'edit_tip.component.html',
})

export class EditTipComponent implements OnInit {
  @Input()
  tip: Tip;
  newTip: Tip;
  
  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tipService.getTip(+params['id']))
      .subscribe(tip => {this.tip = tip;
      this.newTip = this.tip;  
      });
      
  }

  // goBack(): void {
  //   this.location.back();
  // }
}