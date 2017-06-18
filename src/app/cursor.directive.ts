import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core'

@Directive({
	selector: "[cursor]"
})
export class CursorDirective {
	constructor(private element: ElementRef, private renderer: Renderer2) {}

	@HostListener("mouseenter") mouseenter() {
		this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer")
	}
}