import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationWorkerService {
  isWorkerActive: BehaviorSubject<boolean> = new BehaviorSubject(null);

  setStatusOfWorker(status: boolean): void {
    this.isWorkerActive.next(status);
  }
}