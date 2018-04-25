import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanPage } from './scan';
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

@NgModule({
  declarations: [
    ScanPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanPage),
  ],
  providers: [
    BarcodeScanner
  ]
})
export class ScanPageModule {}
