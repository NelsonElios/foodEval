import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";
import {HttpClient} from "@angular/common/http";



/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  result: BarcodeScanResult;
  BASE_URL: string = 'https://world.openfoodfacts.org/api/v0/product';
  api_response_row: any;
  api_response: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public barCodeScanner: BarcodeScanner, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scanBarCode(){
    const barCodeOptions: BarcodeScannerOptions = {
      prompt :'pointez votre caméra vers un code barre',
      torchOn: false
    };

    this.barCodeScanner.scan(barCodeOptions).then(
      (res) => {
        this.result = res;
      }
    ).catch(
      (error) => {
        console.log('impossible de faire le scan');
      }
    );
  }

  getArticlebyBarCode(code: string) {

    this.http.get(`${this.BASE_URL}${code}`).subscribe(
      (data) =>{
        this.displayResult(data);
      },
    (error) => {
        console.log('erreur de recuperation des données');
    }
    ); //backstick
  }

  displayResult(data) {
    this.api_response_row = data;
    this.api_response = data;
  }
}
