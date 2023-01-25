import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduclistComponent } from './components/produclist/produclist.component';

const routes: Routes = [
  {
    path : 'product' , component : ProduclistComponent
  } ,
  {
    path : '' ,
    redirectTo : 'product' ,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
