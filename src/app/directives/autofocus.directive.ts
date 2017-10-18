import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';

@Directive({
    selector: '[appAutoFocus]'
})
/**
 * AutoFocusDirective can be applied to elements which can receive keyboard
 * focus. As soon as the element is created, the keyboard focus switches to
 * the element.
 */
export class AutoFocusDirective implements OnInit {
    constructor(private renderer: Renderer, private elementRef: ElementRef) {}

    ngOnInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
    }
}
