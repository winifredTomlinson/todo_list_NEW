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

    getState(id: number){
        let checked = true;
        
    }
    clickCheckBox(id: number){
        let flag = false;
        if(!flag){
            flag = true;
        }else{
            flag = false;
        }
   
        console.log(flag);
        return TIPS[id].state = flag;
        
         // this.getTip(id)
        // .then(check => Tip[] = flag)
    }
    deleteTip(id: number){
        return this.getTips()
               .then(del => {TIPS.splice(id-1, 1);
                   console.log(TIPS)});
    }
    setTip(id: number, name: string, Tip: Tip){
        Tip.id = id;
        Tip.name = name;
        TIPS.push(Tip);
    }

}
