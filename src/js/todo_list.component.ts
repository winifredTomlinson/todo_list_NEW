import {Directive, Component, OnInit,Input,ViewChild,AfterViewChecked,AfterViewInit,OnChanges,SimpleChange } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Tip } from './tip';
import { TipService } from './tip.service';

class Child {
    @Input() id:number;
}

@Directive({
  selector: '[child]'
})
@Component({
  selector: 'my-app',
  templateUrl: '/todo_list.component.html',
})

export class TodolistComponent implements OnInit,OnChanges {
  // @Input() id:number;
  tips: Tip[] = [];
  tip: Tip;
  a:any;
  editId: number;
  constructor(private tipService: TipService,
          private localStorageService: LocalStorageService) { }
  

    getId(id: number){
      this.editId = id;
      console.log(this.editId);
      // this.localStorageService.set('tip13',id);
    }

  reNew(){
    this.tipService.reNew();
  }
  clickCheckBox(id: number){
    this.tipService.clickCheckBox(id);
  }

  ngOnInit(): void{
    this.tipService.getTips().then(tips => {this.tips = tips;    
      });
      // this.tipService.clickCheckBox(Tip.id);
    // this.tipService.getTip(1);
    this.editId = 1;
    // this.a = this.localStorageService.get('tip13');
    // this.editId = this.a;

    console.log(this.editId);  
     
  }
  ngOnChanges(changes:{[editId:number]: SimpleChange}) {
      this.editId = changes['this.editId'].currentValue; 
      console.log(this.editId);
  }
  
   
  
}

// @Component({
//   selector: 'my-app',
//   templateUrl: '/todo_list.component.html',
// })

// export class OnChangesComponent extends TodolistComponent implements OnChanges  {
//   ngOnChanges() {
//     console.log(this.editId)
//       this.editId = 2; console.log(this.editId);
//   }
//    ngAfterViewInit() { this.editId = 2; console.log(this.editId)}

//   // Beware! Called frequently!
//   // Called in every change detection cycle anywhere on the page
//   ngAfterViewChecked() { this.editId = 3; console.log(this.editId)}
//  getId(id: number){
//       this.editId = id;
//       // console.log(this.editId);
//       console.log(this.editId);
//     }
// }