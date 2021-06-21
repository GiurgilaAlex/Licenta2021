import { Component } from '@angular/core';

import { LocationWorkerService } from './location-worker.service';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {
  constructor(private readonly locationWorkerService: LocationWorkerService) {
    if (!this.locationWorkerService.isWorkerActive.value) {
      if (typeof Worker !== 'undefined') {
        const worker = new Worker('./location.worker', { type: 'module' });
        this.locationWorkerService.setStatusOfWorker(true);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
              const locationRequest = {
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString(),
                token: JSON.parse(localStorage.getItem('token'))
              }
              worker.postMessage(locationRequest);
            }
          }, () => {

          }, { enableHighAccuracy: true });
        }
      }
    }
  }
}