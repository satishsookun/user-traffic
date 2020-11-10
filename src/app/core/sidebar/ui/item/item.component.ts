import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: "ut-item",
    templateUrl: './item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ItemComponent {}
