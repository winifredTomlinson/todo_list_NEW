import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { TIPS } from './mock_tips';


import { Tip } from './tip';
import { TipService } from './tip.service';
@Component({
    selector: 'my-app',
    templateUrl: 'edit_tip.component.html',
})

// export class EditTipComponent implements OnInit {
//   @Input()
//   tip: Tip;
//   newTip: Tip;

//   constructor(
//     private tipService: TipService,
//     private route: ActivatedRoute,
//     private location: Location
//   ) {}
//   noSave(id: number, tip1:Tip){
//     let tip2 =  tip1;
//     this.tipService.noSave(id, tip2);
//   }

//    ngOnInit(): void {
//     this.route.params
//       .switchMap((params: Params) => this.tipService.getTip(+params['id']))
//       .subscribe(tip => {
//       this.tip = tip; 
//       this.newTip = this.tip; 
//       var tip1 = this.newTip;
//       console.log(tip1);
//       // return tip2;
//       });
      
//   }


  export class EditTipComponent implements OnInit {
  @Input() id:number;
  tips: Tip[] = [];
  tips2: Tip[] = [];
  tip: any;
  newTip: Tip;


  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  noSave(id: number){
    let tip2 =  this.tip;
    //  this.tipService.getTips().then(tips => {this.tips = tips;
    //    tip2 = tips[id-1];
    //     console.log(tip2);
    //   });
    console.log(tip2);

    this.tipService.noSave(id, tip2);
  }

   ngOnInit(): void {
      this.tipService.getTips().then(tips => {this.tips = tips;
        this.tips2[0]=this.tips[0];
        console.log(this.tips[0]);
      });
    this.route.params
      .switchMap((params: Params) => this.tipService.getTip(+params['id']))
      .subscribe(tip => {
      const tip1 = tip;
      this.newTip = tip1;
      this.tip = tip1;
      
      });
    // this.tipService.getTips().then(tips => {this.tips = tips;
    //   for(let i = 0; i < tips.length; i++)
    //   {
    //     this.tips2.push(tips[i]);
    //   }
    //   console.log(this.tips2);
    //   });
  }


  // goBack(): void {
  //   this.location.back();
  // }
}