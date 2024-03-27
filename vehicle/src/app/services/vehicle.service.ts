import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveVehicle } from '../models/vehicle/VehicleLocation';
import { Observable } from 'rxjs';
import { VehicleModule } from '../models/vehicle/Vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  // location?:string="";
  constructor(private httpClient:HttpClient) { }
  // userLocation:ActiveVehicle=new ActiveVehicle();
  viewActiveVehicles(location:string):Observable<any>{
    return this.httpClient.get('http://localhost:8080/home/viewActive/'+location);
  }
  addVehicle(vehicle: VehicleModule): Observable<VehicleModule> {
    return this.httpClient.post<VehicleModule>('http://localhost:8080/home/post', vehicle);
  }
  getAllVehicles(): Observable<VehicleModule[]> {
    return this.httpClient.get<VehicleModule[]>('http://localhost:8080/home/view');
  }
  updateVehicles(vehicle: VehicleModule): Observable<VehicleModule> {
    return this.httpClient.put<VehicleModule>('http://localhost:8080/home/update', vehicle);
  }
  private apiUrl = 'http://localhost:8080/home/delete'; // Update this with your Spring Boot DELETE endpoint
  deleteResource(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`, { responseType: 'text', observe: 'response' });
  }
  
}
