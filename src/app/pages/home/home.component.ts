import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { CameraService } from '../camera/camera.service';
import { ItemRealData } from '../camera/item-real-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameContent: string = 'Principal';

  /**  Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.cameras$.subscribe((item: string | any[]) => {
            for(let i = 0; i < item.length; i++)
                this.listCamAux[i] = {camera: item[i], cols: 4, rows: 1 };
                
        });
        return this.listCamAux;
  
      }

      this.cameras$.subscribe((item) => {
        for(let i = 0; i < item.length; i++)
            this.listCamAux[i] = {camera : item[i], cols : 2, rows : 1};
    });
    return this.listCamAux;
  

    })//fim map({})
  );//fim pipe()


      // [x: string]: any;
      cameras$!: Observable<ItemRealData[]>;
      camerasAux$!: Observable<ItemRealData[]>;
      listCamAux: any[] = [];//recebe um merge de camera com as colunas e linhas para formar o grid do Dashboard
      colorClass! : any;//recebe a troca de valores correspondente a cor que será setada no card

  constructor(
    private breakpointObserver: BreakpointObserver,
    private itemService: CameraService,
    public dialog: MatDialog
    ) {}


    ngOnInit() {
      this.cameras$ = this.itemService.listFilterActiveRealData();
    //   this.sortCamera();//ordena a lista de cameras pelo nome
      this.cameras$.subscribe();
  }

}
