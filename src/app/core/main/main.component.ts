import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: 'ut-main',
    templateUrl: './main.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent {

}