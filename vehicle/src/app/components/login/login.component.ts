import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginCustomer } from 'src/app/models/customer/LoginCustomer';
import { AdminService } from 'src/app/services/admin.service';
import { LoginAdmin } from 'src/app/models/admin/LoginAdmin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginCustomer: LoginCustomer = new LoginCustomer();
  loginAdmin: LoginAdmin = new LoginAdmin();
  isAdmin: boolean = false;

  constructor(private customerService: CustomerService, private adminService: AdminService,private router: Router) {}

  onUserTypeChange(event: any): void {
    const selectedUserType = event.target.value;
    this.isAdmin = selectedUserType === 'Admin';
  }

  login(): void {
    if (this.isAdmin) {
      console.log('Admin login process');
      this.adminService.loginAdmin(this.loginAdmin).subscribe({
        next: (data) => {
          console.log(data);
          console.log("Login Successful!");
          alert("Login Successful. Redirecting to Landing Page..");
          this.router.navigateByUrl("landing/admin");
        },
        error: (err) => {
          console.log(err);
          alert(err.error);
        },
        complete: () => {
          console.log("Admin login completed successfully");
        }
      })
    } else {
      // Handle User login
      this.customerService.loginCustomer(this.loginCustomer).subscribe({
        next: (data) => {
          console.log(data);
          console.log("Login Successful!");
          alert("Login Successful. Redirecting to Landing Page..");
          this.router.navigateByUrl("landing/customer");
        },
        error: (err) => {
          console.log(err);
          alert(err.error);
        },
        complete: () => {
          console.log("User login completed successfully");
        }
      });
    }
}
}
