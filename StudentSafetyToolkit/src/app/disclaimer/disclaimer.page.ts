import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
})
export class DisclaimerPage implements OnInit {

  agreedToConditions = false;
  displayError = false;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {}

  isChecked() {
    if (this.agreedToConditions) {
      return true;
    } else {
        return false;
  }
}


  continue() {
    if (this.isChecked()) {
    this.storage.set('disclaimerShown', true);
    this.router.navigate(['/app-info']);
    } else {
      this.displayError = true;
    }
  }
}
