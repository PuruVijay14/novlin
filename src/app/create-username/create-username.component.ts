import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { HttpClient } from "../../../node_modules/@angular/common/http";
@Component({
  selector: "app-create-username",
  templateUrl: "./create-username.component.html",
  styleUrls: ["./create-username.component.scss"]
})
export class CreateUsernameComponent implements OnInit {
  /** Heading hidden */
  headingHidden = false;

  constructor(
    private breakpointObservor: BreakpointObserver,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.breakpointObservor
      .observe(["max-width: 600px"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // Hide the text
          this.headingHidden = false;
        } else {
          this.headingHidden = true;
        }
      });
  }

  log($event) {
    this.http
      .post(
        "http://localhost:5000/novlin-scratch/us-central1/createUsername",
        $event.target.value
      )
      .subscribe(console.log);
  }
}
