import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import { take } from "rxjs/operators";
import { Observable } from "rxjs";
import { MatInput } from "@angular/material/input";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-create-username",
  templateUrl: "./create-username.component.html",
  styleUrls: ["./create-username.component.scss"]
})
export class CreateUsernameComponent implements OnInit {
  /** Heading hidden */
  headingHidden = false;

  /** Error state matcher */
  matcher = new MyErrorStateMatcher();

  userFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern(`[a-zA-Z0-9-_^]*`)
  ]);
  /** Error  */
  usernameTaken = false;

  constructor(
    private afStore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    // this.userFormControl.
  }

  verifyInput() {
    const errors = this.userFormControl.errors;

    if (!errors) {
      return true;
    } else {
      if (errors.required) {
        // this.required = true;
      }
    }

    console.log(errors);
  }

  createUser() {
    if (this.verifyInput()) {

      const value = this.userFormControl.value;

      this.afStore
        .collection(`users`, ref => ref.where(`username`, "==", value))
        .valueChanges()
        .pipe(take(1))
        .subscribe(async data => {
          console.log(data);

          if (data.length === 0) {
            // The user doesn't exists
            // Write the username to firestore
            await this.afStore.doc(`users/${localStorage.getItem("email")}`).set(
              {
                username: value,
                isSetUp: true
              },
              { merge: true }
            );

            this.router.navigate(["home/welcome"]);
          } else {
            // User exists
            // Output warning
            console.error(`Oops, username is taken :(`);
            this.userFormControl.setErrors({});
            this.usernameTaken = true;
          }
        });
    }
  }
}
