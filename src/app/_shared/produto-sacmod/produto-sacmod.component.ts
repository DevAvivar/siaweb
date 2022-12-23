import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-sacmod',
  templateUrl: './produto-sacmod.component.html',
  styleUrls: ['./produto-sacmod.component.scss']
})
export class ProdutoSacmodComponent implements OnInit {

  constructor( public matDialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  close(){
    this.matDialog.closeAll();
  }
}
