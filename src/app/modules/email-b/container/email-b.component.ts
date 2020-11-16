import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {EmailBDialogComponent} from "../ui/dialog/email-b-dialog.component";

@Component({
  selector: 'ut-email-b',
  templateUrl: './email-b.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmailBComponent {

    constructor(
        public dialog: MatDialog
    ) {}

    public openDialog(): void {
        this.dialog.open(EmailBDialogComponent, {
            width: '400px',
            height: 'auto',
        });
    }
}
