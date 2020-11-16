import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {EmailADialogComponent} from "../ui/dialog/email-a-dialog.component";

@Component({
  selector: 'ut-email-a',
  templateUrl: './email-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmailAComponent {

  constructor(
      public dialog: MatDialog
  ) {}

  public openDialog(): void {
    this.dialog.open(EmailADialogComponent, {
        width: '400px',
        height: 'auto',
    });
  }

}
