import { Component } from '@angular/core';
import { VehicleModule } from 'src/app/models/vehicle/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-update-vehicles',
  templateUrl: './update-vehicles.component.html',
  styleUrls: ['./update-vehicles.component.css']
})
export class UpdateVehiclesComponent {
  
  vehicle: VehicleModule = new VehicleModule(undefined, undefined , '', undefined , undefined , '');

  constructor(private vehicleService: VehicleService) {}

  updateVehicle(): void {
    this.vehicleService.addVehicle(this.vehicle).subscribe({
      next: (data) => {
        console.log('Vehicle Updated successfully', data);
        // Reset form or provide feedback to the user
        alert("Vehicle Updated");
        this.vehicle = new VehicleModule(undefined, undefined , '', undefined , undefined , '');

      },
      error: (error) => {console.error('There was an error!', error);
      alert("Error Adding the Vehicle");
    }
    });
  }
}
