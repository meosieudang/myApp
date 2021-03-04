import { PhotoService } from './../../services/camera.service';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  item: {};
  bookingListRef: AngularFireList<any>;
  constructor(
    private camera: PhotoService,
    private barcodeScanner: BarcodeScanner,
    private printer: Printer,
    private bluetoothSerial: BluetoothSerial,
    private firebase: FirebaseX,
    private db: AngularFireDatabase
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

    this.firebase
      .getToken()
      .then((token) => console.log(`The token is ${token}`));

    this.firebase
      .onMessageReceived()
      .subscribe((data) => console.log(`FCM message: ${data}`));

    this.db
      .object('price')
      .valueChanges()
      .subscribe((data) => {
        this.item = data;
      });
    this.db
      .object('price')
      .snapshotChanges()
      .subscribe((action) => {
        console.log({ action });
      });

    // this.db.object('price').set(9999);
    // this.bookingListRef.push({
    //   name: 'A',
    //   price: 10,
    // });
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
