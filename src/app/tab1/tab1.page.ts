import { PhotoService } from './../../services/camera.service';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private camera: PhotoService,
    private barcodeScanner: BarcodeScanner,
    private printer: Printer,
    private bluetoothSerial: BluetoothSerial
  ) {
    this.printer
      .isAvailable()
      .then(() => {
        console.log('printer available');
      })
      .catch((error) => {
        console.log('printer not available' + error);
      });
    this.bluetoothSerial.list().then((e) => console.log(e));
  }

  onClickMe() {
    console.log('object');
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
    // this.camera.takePicture();
  }
  onPrint() {
    console.log('print');
    this.bluetoothSerial.connectInsecure('0C:25:76:39:F7:40').subscribe(() => {
      this.bluetoothSerial
        .write('qmwlmwlqmwlqmw mqwm qwqmwqmwqqwql mq wq')
        .then((e) => console.log(e, 'eee'));
    });
    // this.bluetoothSerial
    //   .write('[186, 220, 222]')
    //   .then((e) => console.log(e, 'eee'));
    // let options: PrintOptions = {
    //   name: 'MyDocument',
    //   duplex: true,
    // };
    // this.printer.print('http://google.com', options);
    // let options: PrintOptions = {
    //   name: 'MyDocument',
    //   duplex: true,
    //   orientation: 'landscape',
    //   monochrome: true,
    // };
    // this.printer.print('content', options).then((e) => console.log('ok', e));
  }
}
