import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route1Component } from './route1/route1.component';


const routes: Routes = [
  { path: 'route1', component: Route1Component },
  { path: 'route2', component: Route2Component },
  { path: 'route3', component: Route3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
