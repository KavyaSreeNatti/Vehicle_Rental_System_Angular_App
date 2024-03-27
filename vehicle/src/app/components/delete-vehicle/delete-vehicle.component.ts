import { Component } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent {
  vehicleId!: number;
    successMessage!: string;
  
    constructor(private VehicleService: VehicleService) {}
  
    deleteVehicle() {
      this.VehicleService.deleteResource(this.vehicleId)
.subscribe({
  next: (response: any) => {
    this.successMessage = response.body || 'Vehicle deleted successfully';
    console.log(response.body);
  },
  error: (error: any) => {
    console.error('Error deleting :', error);
  }
}
);
    
}
}
