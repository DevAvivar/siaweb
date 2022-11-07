import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Camera } from 'src/app/pages/camera/camera.model';

@Component({
  selector: 'app-dialog-read-failure',
  templateUrl: './dialog-read-failure.component.html',
  styleUrls: ['./dialog-read-failure.component.scss']
})
export class DialogReadFailureComponent implements OnInit {

  @Input() content!: String;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {device: Camera},) { }

  ngOnInit(): void {

    this.content = "ATENÇÃO, 5 FALHAS DE LEITURA  NA "+this.data.device.name;
  }

}
