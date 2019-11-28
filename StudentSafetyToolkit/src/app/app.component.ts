import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MetadataService } from './services/metadata.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public currentPage: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService: MetadataService,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('disclaimerShown').then(result => {
        // If it is set, then skip that page and go to default page (App-info)
        if (!result) {
          this.router.navigate(['/disclaimer']);
        }
      });
    });
  }
  isDisclaimerPage() {
    if (this.router.url === '/disclaimer') {
      return true;
    } else {
      return false;
    }
  }
}
