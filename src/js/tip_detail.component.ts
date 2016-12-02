import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


import { Tip } from './tip';
import { TipService } from './tip.service';
@Component({
    selector: 'my-app',
    templateUrl: 'tip_detail.component.html',
})

export class TipDetailComponent implements OnInit {
  @Input()
  tip: Tip;
  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tipService.getTip(+params['id']))
      .subscribe(tip => this.tip = tip);
  }

  goBack(): void {
    this.location.back();
  }
}