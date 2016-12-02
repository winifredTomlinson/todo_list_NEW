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
    setTip(id: number, name: string, Tip: Tip){
        Tip.id = id;
        Tip.name = name;
        TIPS.push(Tip);
    }

}
