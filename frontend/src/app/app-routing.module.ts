import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user',component:UserhomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'mainscreen', component:MainscreenComponent},
  {path: 'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
