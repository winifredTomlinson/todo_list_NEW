import { Component, OnInit } from '@angular/core';
import { Tip } from './tip';
import { TipService } from './tip.service';
@Component({
  selector: 'add-tip',
  templateUrl: '/component/add_tip.component.html'
})
export class AddTipComponent implements OnInit {

  tip: Tip;

  constructor(private tipService: TipService) { }

  ngOnInit(): void{
    // this.tipService.setTip(id, detail,Tip);
  }
}