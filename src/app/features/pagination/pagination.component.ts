import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
    selector: 'ut-pagination',
    templateUrl: './pagination.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginationComponent {

    @Output() emitPrevious: EventEmitter<void>;
    @Output() emitNext: EventEmitter<void>;

    @Input() hidePrev: boolean;
    @Input() hideNext: boolean;

    constructor() {
        this.emitPrevious = new EventEmitter<void>();
        this.emitNext = new EventEmitter<void>();
    }

    public onPrevious(): void {
        this.emitPrevious.emit();
    }

    public onNext(): void {
        this.emitNext.emit();
    }
}