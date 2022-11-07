import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.scss']
})
export class MyToolbarComponent implements OnInit {

  @Input() nameContent!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
