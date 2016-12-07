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
    reNew(): Promise<Tip>{
        var tip = new Tip; 
        return Promise.resolve(tip);
    }
    clickCheckBox(id: number){
        let flag = TIPS[id-1].state;
        if(!flag){
            flag = true;
        }else{
            flag = false;
        }

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
    setTip(notice: boolean,name: string, expirationTime:string, description:string){
            let tip = new Tip;
            if(name == undefined||name == ''){
                notice = true;
            }else{
                let id = TIPS.length + 1;
                tip.id = id;
                tip.name = name;
                tip.expirationTime = expirationTime;
                tip.description = description;
                TIPS.push(tip);
                return notice;
                
            }
    }
    noSave(id: number, tip2: Tip){
        this.getTips(); 
        TIPS[id-1] = tip2;
        console.log(TIPS[id-1]);
    }

}
