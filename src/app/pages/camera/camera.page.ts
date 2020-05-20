import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

//Code retrieved from:
//https://capacitor.ionicframework.com/docs/guides/ionic-framework-app/?fbclid=IwAR2kN14AHnRUBglTXITm21avNstwk2Pikf64lml9IF6gVHHlsamxAH-Tzk4


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {  }
//Saninitizer will apply some security when the function camera is called
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }
}