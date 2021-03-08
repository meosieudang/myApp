import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Printer } from '@ionic-native/printer/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDWPs2R5OiXg5QDAG31NWqUjGZVW2nXP3g',
      authDomain: 'postest-15a71.firebaseapp.com',
      databaseURL: 'https://postest-15a71-default-rtdb.firebaseio.com',
      projectId: 'postest-15a71',
      storageBucket: 'postest-15a71.appspot.com',
      messagingSenderId: '830151311528',
      appId: '1:830151311528:web:d7216fa54bef0b30ca429d',
      measurementId: 'G-96C36732KY',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FirebaseX,
    BluetoothSerial,
    Printer,
    Camera,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
