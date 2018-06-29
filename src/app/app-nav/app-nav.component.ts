import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef
} from "@angular/core";
import { appearence } from "../animations/app-bar";
import { AppBarService } from "../services/app-bar.service";
import { Router } from "@angular/router";
import { MatDrawer, MatToolbarRow } from "@angular/material";
import { AuthService } from "../services/auth.service";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-nav",
  templateUrl: "./app-nav.component.html",
  styleUrls: ["./app-nav.component.scss"],
  animations: [appearence]
})
export class AppNavComponent implements OnInit {
  position = 0;
  appBarState = "hidden";
  /**Icon on navbar */
  icon = "menu";

  /** Whether the icon is hidden */
  iconHidden = false;

  /** title of toolbar */
  title = "Welcome!";

  /** Tooltip text */
  tooltipText = "Site menu!";

  /** Drawer */
  @ViewChild("drawer") drawer: MatDrawer;

  /** Title row */
  @ViewChild("titleRow") titleRowRef: ElementRef;

  /** App Bar */
  @ViewChild("appBar") appBarRef: ElementRef;

  styles = {
    appBar: {
      "bottom.px": 0
    }
  };

  constructor(
    public appBarService: AppBarService,
    public router: Router,
    private authService: AuthService
  ) {}

  handleNav() {
    // App bar
    const appBar = document.querySelector("#app-bar");

    const firstRowHeight = this.titleRowRef.nativeElement.offsetHeight;
    const appBarHeight = appBar.clientHeight;

    this.styles.appBar["bottom.px"] = -1 * (appBarHeight - firstRowHeight);

    this.iconHidden = this.iconHidden ? false : true;
  }

  ngOnInit() {
    this.appBarState = "visible";
    this.adaptiveNavbar();
    this.handleNav();
    this.adaptiveAction();
  }

  toggleToolbar($event: Event) {
    const scroll = $event.srcElement.scrollTop;
    let scrollDirection;
    scrollDirection = scroll > this.position ? "down" : "up";

    if (scrollDirection === "down") {
      this.appBarState = "hidden";
    } else {
      this.appBarState = "visible";
    }
    /** Comes at the last of function */
    this.position = scroll;
  }

  async adaptiveAction() {
    // this.appBarService.state$.subscribe(console.log);
    // return await this.appBarService.state$.subscribe(data => {
    //   switch (data.id) {
    //     case "auth":
    //       this.backToHome();
    //       break;

    //     default:
    //       this.handleNav();
    //       break;
    //   }
    // });
  }
  backToHome() {
    this.router.navigate([""]);
  }

  /** Manages the working of navbar based on its state */
  adaptiveNavbar(): void {
    this.appBarService.state$.subscribe(data => {
      switch (data.id) {
        case "auth":
          /** Menu icon --> Back icon
           * Text --> Tap the icon
           */
          this.icon = "arrow_back_rounded";
          this.title = "Click on the icon";
          this.tooltipText = "Back to home";
          break;

        case null:
          this.icon = "menu";
          this.title = "Welcome!";
          this.tooltipText = "Site Menu";
          break;
      }
    });
  }
}
