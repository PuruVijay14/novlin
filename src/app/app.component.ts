import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer, Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private afAuth: AngularFireAuth,
    private meta: Meta
  ) {
    this.manageTitle();
    this.addSVGcustomIcons();
    this.afAuth.user.subscribe(console.log);
  }

  ngOnInit(): void {
    // this.changeThemeColor();
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
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/auth/google-icon.svg")
    );
    this.matIconRegistry.addSvgIconInNamespace(
      `icons`,
      'explore',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/outline-explore-24px.svg")
    );
  }
   getRandomRGBValue() {
    return Math.min(Math.floor(Math.random() * 255 + 1), 255);
  }

  getRandomColor() {
    const r = this.getRandomRGBValue(),
        g = this.getRandomRGBValue(),
        b = this.getRandomRGBValue();
    return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
  }

  changeThemeColor() {
    this.meta.updateTag(
      { name: 'theme-color', content: this.getRandomColor() },
      `name='theme-color'`
    );
    setInterval(() => {
        this.changeThemeColor();
    }, 5000);
  }

}
