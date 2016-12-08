import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalBackdrop} from './modal_backdrop';
import { MaterialModule } from '@angular/material';
// import {MdDialogRef} from './dialog_ref';


import { Tip } from './tip';
import { TipService } from './tip.service';
import { TodolistComponent } from './todo_list.component';
@Component({
  selector: 'add-tip',
  templateUrl: '/component/add_tip.component.html'
})
export class AddTipComponent implements OnInit {
  @Input()
  tips: Tip[] = [];
  addTip: Tip;
  notice: boolean;
  constructor(
    private tipService: TipService,
    private modalService: NgbModal,
  ) {
    
   }
  setTip(name: string, expirationTime:string, description:string){

    this.notice = this.tipService.setTip(name,expirationTime,description); 
    if(!this.notice){
      this.addTip = new Tip;
      //  console.log(document.getElementById('#a'));
    }
  }
  close(){
     this.addTip = new Tip;
  }
  ngOnInit(): void{
    // this.tip = tip;
    this.tipService.reNew().then(reNewTip => {this.addTip = new Tip;
      });;
  }
}

  

 

// export class NgbdModalBasic {
//   closeResult: string;

//   constructor(private modalService: NgbModal) {}

//   open(content: any) {
//     this.modalService.open(content).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }
// }