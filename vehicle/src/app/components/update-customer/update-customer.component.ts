import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  customer: Customer = new Customer('', '', '');

  constructor(private adminService: AdminService) {}

  updateCustomer(): void {
    this.adminService.updateCustomer(this.customer).subscribe({
      next: (data) => {
        console.log('Customer updated successfully', data);
        // Reset form or provide feedback to the user
        alert("Customer Updated");
        this.customer = new Customer('', '', '');
      },
      error: (error) => console.error('There was an error!', error)
    });
  }
}
