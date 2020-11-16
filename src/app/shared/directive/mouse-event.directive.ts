import {AfterViewInit, Directive, ElementRef, Renderer2} from "@angular/core";
import {fromEvent} from "rxjs/internal/observable/fromEvent";

@Directive({
    selector: '.mouseEvent',
})
export class MouseEventDirective implements AfterViewInit {

    constructor(
        private elemRef: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngAfterViewInit() {
        this.trackScrollEvent();
    }

    private trackScrollEvent() {
        const scroll = fromEvent(document, 'scroll');

        scroll.subscribe( (event: MouseEvent) => {
            event.stopPropagation();

            const bodyPosition = document.querySelector('body').getBoundingClientRect();
            this.animateHeader(bodyPosition.top)
        });
    }

    private animateHeader(bodyTopPos: number) {
        if (bodyTopPos < (-100) ) {
            this.renderer.addClass(this.elemRef.nativeElement, 'collapse');
        } else {
            this.renderer.removeClass(this.elemRef.nativeElement, 'collapse');
        }
    }

}