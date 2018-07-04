import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

export const apparation = [
  trigger("apparation", [
    state("disapparated", style({ transform: "scale(0,0)" })),
    state("apparated", style({ transform: "scale(1,1)" })),
    transition(
      "disapparated => apparated",
      animate("200ms cubic-bezier(0.0, 0.0, 0.2, 1)", keyframes([
        style({transform: 'scale(0, 0)', offset: 0}),
        style({transform: 'scale(0.4, 0.4)', offset: 0.2}),
        style({transform: 'scale(0.7, 0.7)', offset: 0.4}),
        style({transform: 'scale(0.9, 0.9)', offset: 0.6}),
        style({transform: 'scale(1.2, 1.2)', offset: 0.8}),
        style({transform: 'scale(1, 1)', offset: 1}),
      ]))
    ),
    transition(
      "apparated => disapparated",
      animate("100ms cubic-bezier(0.4, 0.0, 1, 1)")
    )
  ])
];
