import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductComponent } from './product-module/product-component/product-component';
import { ViewProductComponent } from './product-module/view-product/view-product.component';
import { ForgotPasswordComponent } from './user-module/forgot-password/forgot-password.component';
import { UserLoginComponent } from './user-module/user-login/user-login.component';
import { UserRegisterComponent } from './user-module/user-register/user-register.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'products', component: ProductComponent},
  {path: 'userLogin', component: UserLoginComponent},
  {path: 'userRegister', component:UserRegisterComponent},
  {path: 'adminLogin', component:AdminLoginComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},
  {path: 'viewProduct/:productId', component:ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
