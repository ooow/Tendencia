import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-value-dialog',
  templateUrl: './new-value-dialog.component.html',
  styleUrls: ['./new-value-dialog.component.scss']
})
export class NewValueDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
