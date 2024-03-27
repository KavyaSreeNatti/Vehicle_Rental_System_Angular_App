import { Component } from '@angular/core';
import { VehicleModule } from 'src/app/models/vehicle/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent {
  vehicle: VehicleModule[] = [];
  
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.fetchAllVehicle();
  }

  fetchAllVehicle(): void {
    this.vehicleService.getAllVehicles().subscribe({
      next: (data) => {
        this.vehicle = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
