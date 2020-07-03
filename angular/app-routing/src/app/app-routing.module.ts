import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { List1Component } from './list1/list1.component';
// import { List2Component } from './list2/list2.component';
import { List1Component, List2Component } from "./barel"

const routes: Routes = [
  {path: "", redirectTo: 'list1', pathMatch: 'full'},
  {path: "list1", component: List1Component},
  {path: "list2", component: List2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
