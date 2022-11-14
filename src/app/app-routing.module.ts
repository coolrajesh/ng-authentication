import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { LogoutComponent } from '../app/logout/logout.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
