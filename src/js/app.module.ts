import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TodolistComponent }  from './todo_list.component';
import { TipDetailComponent }  from './tip_detail.component';
import { EditTipComponent }  from './edit_tip.component';
import { AddTipComponent }  from './add_tip.component';
import { MoreOperationComponent }  from './more_operation.component';

import { TipService }          from './tip.service';

import { AppRoutingModule }     from './app_routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TodolistComponent,
    TipDetailComponent,
    EditTipComponent,
    AddTipComponent,
    MoreOperationComponent
  ],
  providers: [ TipService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }