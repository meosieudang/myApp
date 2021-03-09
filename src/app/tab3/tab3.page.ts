import { Component, NgZone } from '@angular/core';
import { IPedometerData, Pedometer } from '@ionic-native/pedometer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  // private pedometer: any;
  public isStepCountingAvailable: any;
  public step: any = { numberOfSteps: 2 };

  constructor(private ngZone: NgZone, private Pedometer: Pedometer) {
    Pedometer.isStepCountingAvailable().then((available: boolean) => {
      this.isStepCountingAvailable = available;
    });
    this.onSubscribePedometer();
  }

  onSubscribePedometer = () => {
    this.Pedometer.startPedometerUpdates().subscribe((data: IPedometerData) => {
      this.ngZone.run(() => (this.step = data));
    });
  };
}
