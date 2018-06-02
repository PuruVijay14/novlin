import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.manageTitle();
  }

  /**
   * Manage the app's title according to the route
   */
  manageTitle(): void {
    this.router.events
      .pipe(
        map(() => this.route),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === "primary"),
        mergeMap(route => route.data)
      )
      .subscribe(event => (document.title = event["title"]));
  }
}
