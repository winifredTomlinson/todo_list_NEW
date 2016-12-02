import { Component, OnInit} from '@angular/core';
// import {Tip} from './tip';
// import { TipService } from './tip.service';
@Component({
  selector: 'my-app',
  template: `
    <h2>My List</h2>
    <router-outlet></router-outlet>   
    `,
    // providers: [TipService]
})
export class AppComponent {
  // tips : Tip[];
  // selectedTip: Tip;

  // constructor(private tipService: TipService) { }


  // ngOnInit(): void{
  //   this.tipService.getTips().then(tips => this.tips = tips);
  // }
  // onSelect(tip: Tip): void {
  //   this.selectedTip = tip;
  // }
}


