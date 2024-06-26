import { Component } from '@angular/core';
import { VehicleModule } from 'src/app/models/vehicle/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicle: VehicleModule = new VehicleModule(undefined, undefined , '', undefined , undefined , '');

  constructor(private VehicleService: VehicleService) {}

  addVehicle(): void {
    this.VehicleService.addVehicle(this.vehicle).subscribe({
      next: (data) => {
        console.log('Vehicle added successfully', data);
        // Reset form or provide feedback to the user
        alert("Vehicle Added");
        this.vehicle = new VehicleModule(undefined, undefined , '', undefined , undefined , '');
      },
      error: (error) => {console.error('There was an error!', error);
      alert("Error Adding the Vehicle");
    }
    });
  }
}