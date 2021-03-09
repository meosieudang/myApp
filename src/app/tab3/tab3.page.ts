import { Component } from '@angular/core';
import { IPedometerData, Pedometer } from '@ionic-native/pedometer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  isDistanceAvailable: any;
  numberOfSteps: number | 0;

  constructor(Pedometer: Pedometer) {
    Pedometer.isDistanceAvailable()
      .then((available: boolean) => {
        this.isDistanceAvailable = available;
        console.log(available);
      })
      .catch((error: any) => console.log(error));

    Pedometer.startPedometerUpdates().subscribe(
      (data: IPedometerData) => {
        alert(JSON.stringify(data));
        console.log(data);
        this.numberOfSteps = data.numberOfSteps;
      },
      (err) => alert(JSON.stringify(err))
    );
  }
}
