import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'user'},
  {path:'user', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
