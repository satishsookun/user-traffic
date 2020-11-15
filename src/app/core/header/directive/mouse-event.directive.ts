import {AfterViewInit, Component, ElementRef} from "@angular/core";
import {fromEvent} from "rxjs/internal/observable/fromEvent";

@Component({
    selector: 'ut-mouse-event',
})
export class MouseEventDirective implements AfterViewInit {

    constructor(
        private elemRef: ElementRef,
    ) {}

    ngAfterViewInit() {
        this.trackScrollEvent();
    }

    private trackScrollEvent() {
        const scroll = fromEvent(window, 'scroll');

        scroll.subscribe( (event: MouseEvent) => console.log('test'))
    }

}