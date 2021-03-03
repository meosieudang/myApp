import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Printer } from '@ionic-native/printer/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    BluetoothSerial,
    Printer,
    Camera,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
