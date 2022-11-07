import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { CameraService } from 'src/app/pages/camera/camera.service';
import { ItemRealData } from 'src/app/pages/camera/item-real-data.model';

@Component({
  selector: 'app-dialog-camera-shift-select',
  templateUrl: './dialog-camera-shift-select.component.html',
  styleUrls: ['./dialog-camera-shift-select.component.scss']
})
export class DialogCameraShiftSelectComponent implements OnInit {

  selectedShift: number = 1;//default
  selectedProductionDate: any = null;//valor default
  content!: String;
  @Input() Title!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{item: ItemRealData}, 
    private itemService: CameraService,
    public matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {}

   /**
     * Função para setar um turno no momento de iniciar uma leitura de camera do sistema.
     * Tornando o valor do campo tunel obrigatário para o envio do da requisição de iniciar a leitura de determinada camera passada como parametro
     */
    updateCameraShift(shift: number, productionDate: any) {
      console.log("data de producao: "+productionDate+ "   Turno : "+shift);
      if(shift <= 0 || productionDate == null)
       return;
       this.data.item.camShift = shift;
       console.log("TESTE DE TURNO   "+this.data.item.camShift);
       let newProductionDate: moment.Moment = moment.utc(productionDate);
       this.data.item.camProductionDate = newProductionDate.format("YYYY-MM-DD");
      this.itemService.cadastrarItemRealData(this.data.item).subscribe(
       {
        next: (itemAtualizado) => {
         if( (itemAtualizado.camShift == shift ) &&  (itemAtualizado.camProductionDate == newProductionDate.format("YYYY-MM-DD")) )
         {
           this.matSnackBar.open("Atualizado com sucesso!", '', {
             duration: 5000,
             panelClass: "green-snackbar",
         });
         // location.reload;
         }
         else
         {
           this.matSnackBar.open("Não foi possível atualizar os dados.\n Tente novamente.", '', {
             duration: 5000,
             panelClass: "black-snackbar",
         });
         }
           
       },
       error: (error) => {
           this.matSnackBar.open("Erro, Não foi possível atualizar.", '', {
               duration: 5000,
               panelClass: "red-snackbar",
           });
       },
       complete: () =>{console.info('Complete')}
      });//fim subscribe()

 }//fim updateCameraShift()


}
