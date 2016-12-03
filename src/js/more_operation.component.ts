import { Component, OnInit} from '@angular/core';

import { Tip } from './tip';
import { TipService } from './tip.service';
@Component({
    selector: 'more-oparetion',
    templateUrl: 'component/more_operation.component.html',
})


export class MoreOperationComponent implements OnInit{
    tip: Tip;
    constructor(private tipService: TipService) {}
    deleteTip(id: number){
        this.tipService.deleteTip(1);
        //   .then(reload => window.location.reload());
    }
   ngOnInit(): void {
    //  this.tipService.deleteTip(1)
    //  .then(reload => window.location.reload());
    // 
  }

}