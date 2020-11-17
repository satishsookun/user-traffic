import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
	selector: 'ut-calendar',
	templateUrl: './calendar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalendarComponent {
	
	@Input() maxDate: string;
	@Input() dateLabel: string;

}