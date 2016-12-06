import { Injectable } from '@angular/core';
import { Tip } from './tip';
import { TIPS } from './mock_tips';

@Injectable()
export class TipService{
    getTips():Promise<Tip[]>{
        return Promise.resolve(TIPS);
    }

    getTip(id: number): Promise<Tip> {
    return this.getTips()
               .then(tips => tips.find(tip => tip.id === id));
    }
    reNew(){
        var tip = new Tip; 
        console.log(tip);
    }
    clickCheckBox(id: number){
        let flag = TIPS[id-1].state;
        if(!flag){
            flag = true;
        }else{
            flag = false;
        }
   
        console.log(flag);
        console.log(id);
        return TIPS[id-1].state = flag;
        
         // this.getTip(id)
        // .then(check => Tip[] = flag)
    }
    deleteTip(id: number){
        return this.getTips()
               .then(del => {
                   if(id < TIPS.length){
                       for(let i = id; i < TIPS.length; i++){
                           TIPS[i].id = TIPS[i].id - 1;
                       }
                   }
                TIPS.splice(id-1, 1);});
    }
    // newTip(Tip: Tip){
    //     return this.newTip()
    //             .then(newTIP =>);
    // }
    setTip(name: string, expirationTime:string, description:string){
        //  return this.getTips()
        //        .then(newTip => {
        //         let id = TIPS.length + 1;
        //         tip.id = id;
        //         tip.name = name;
        //         tip.expirationTime = expirationTime;
        //         tip.description = description;
        //         TIPS.push(tip);
        //         console.log(tip);
        //        });
            let tip = new Tip;
            let id = TIPS.length + 1;
            tip.id = id;
            tip.name = name;
            tip.expirationTime = expirationTime;
            tip.description = description;
            TIPS.push(tip);
            tip = new Tip;
            console.log(TIPS);
    }
    // noSave(newTip: Tip, tip: Tip){
    //     newTip = tip;
    // }

}
