import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.scss']
})
export class DialogElementsExampleDialogComponent implements OnInit {

  content!: String;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {content: string},) { }

  ngOnInit(): void {
  }


}
