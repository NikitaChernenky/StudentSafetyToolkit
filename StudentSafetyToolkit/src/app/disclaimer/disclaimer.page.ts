/*
Mykyta Chernenky
CS 455 - Mobile Computing
Disclaimer.ts
*/
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

  isChecked() { // check of the box is ticked
    if (this.agreedToConditions) {
      return true;
    } else {
        return false;
  }
}


  continue() { // if box is ticked -> continue to the appliciation 
    if (this.isChecked()) { // if box is checked
    this.storage.set('disclaimerShown', true); // make the app aware that the user has ticked the box so this page doesn't shpw up again
    this.router.navigate(['/app-info']); // route to app info page
    } else { // if not ticked
      this.displayError = true; // display validation error
    }
  }
}
