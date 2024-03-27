import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerlandingComponent } from './components/customerlanding/customerlanding.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ActiveVehiclesComponent } from './components/active-vehicles/active-vehicles.component';
import { Admin } from './models/admin/Admin';
import { AdminlandingComponent } from './components/adminlanding/adminlanding.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { UpdateVehiclesComponent } from './components/update-vehicles/update-vehicles.component';
import { DeleteVehicleComponent } from './components/delete-vehicle/delete-vehicle.component';



const routes: Routes = [
  {path:'register/customer',component:RegisterComponent},
  {path:'login/customer',component:LoginComponent},
  {path:'landing/customer',component:CustomerlandingComponent},
  {path:'home',component:CarouselComponent},
  {path:'landing/customer/vehicles/active',component:ActiveVehiclesComponent},
  {path:'landing/admin',component:AdminlandingComponent},
  {path:'landing/admin/customer/add',component:AddCustomerComponent},
  {path: 'landing/admin/customer/update',component:UpdateCustomerComponent},
  {path: 'landing/admin/customer/delete',component:DeleteCustomerComponent},
  {path: 'landing/admin/customer/view',component:ViewCustomersComponent},
  {path: 'landing/admin/vehicle/add',component:AddVehicleComponent},
  {path: 'landing/admin/vehicle/view',component:ViewVehiclesComponent},
  {path: 'landing/admin/vehicle/update',component:UpdateVehiclesComponent},
  {path: 'landing/admin/vehicle/delete',component:DeleteVehicleComponent},
  {path:'landing/admin/vehicles/active',component:ActiveVehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
