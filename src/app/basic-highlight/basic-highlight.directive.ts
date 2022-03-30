import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class BasicHightLightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
