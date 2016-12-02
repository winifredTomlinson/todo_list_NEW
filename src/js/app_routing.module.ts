import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TodolistComponent }  from './todo_list.component';
import { TipDetailComponent }  from './tip_detail.component';
import { AddTipComponent }  from './add_tip.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo_list', pathMatch: 'full' },
  { path: 'todo_list',  component: TodolistComponent },
  { path: 'todo_list/:id',  component: TipDetailComponent },
  { path: 'todo_list/add-tip',  component: AddTipComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}