import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
import { Title, DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private afAuth: AngularFireAuth
  ) {
    this.manageTitle();
    this.addSVGcustomIcons();
    this.afAuth.user.subscribe(console.log);
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
      .subscribe(event => this.title.setTitle(event["title"]));
  }

  /** Add the SVg icons */
  addSVGcustomIcons() {
    this.matIconRegistry.addSvgIcon(
      `google`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/auth/google.svg")
    );
  }
}
