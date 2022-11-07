import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CameraService } from '../../camera/camera.service';
import { ItemRealData } from '../../camera/item-real-data.model';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-amount-barcode-camera',
  templateUrl: './report-amount-barcode-camera.component.html',
  styleUrls: ['./report-amount-barcode-camera.component.scss']
})
export class ReportAmountBarcodeCameraComponent implements OnInit {

  nameContent: string = '';
  formGroup!: UntypedFormGroup;
  item!: ItemRealData;
  responseURL!: string;
  cameras$!: Observable<ItemRealData[]>;
  loading = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private itemService: CameraService,
    public matDialog: MatDialog,
    public matSnackBar: MatSnackBar,
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.cameras$ = this.itemService.listAllRealData();//manda uma lista de cameras para ser usado no select
    this.formGroup = this.formBuilder.group({
      camera: ['', [Validators.required]],
      dateInitial: ['', [Validators.required]],
      dateFinal: ['', [Validators.required]],
      timeInitial: ['', [Validators.required]],
      timeFinal: ['', [Validators.required]]
    });

  }

  generateReport() {
    let newDateInitial: moment.Moment = moment.utc(this.formGroup.value.dateInitial).local();
    let newDateFinal: moment.Moment = moment.utc(this.formGroup.value.dateFinal).local();
    this.formGroup.value.dateInitial = newDateInitial.format("YYYY-MM-DD") + " " + this.formGroup.value.timeInitial + ":00.000";
    this.formGroup.value.dateFinal = newDateFinal.format("YYYY-MM-DD") + " " + this.formGroup.value.timeFinal + ":00.000";
    if (newDateFinal < newDateInitial) {
      this.matSnackBar.open("Data Final não pode ser menor que a data inicial", '', {
        duration: 5000,
        panelClass: "yellow-snackbar",
      });
      return ;
    }
    this.loading = true;
    this.reportService.listReadGroupByCamera(this.formGroup.value.camera, this.formGroup.value.dateInitial, this.formGroup.value.dateFinal).subscribe(
      {
        next: (res) => {
          this.loading = false;
        console.log('success', res);
        },
        error: (error) => {
          console.log('error', error);
        this.responseURL = error.url;
        console.log(error.url);
        window.open(this.responseURL, '_blank'); // in new tab
        this.loading = false;
        },
        complete: () => {console.info('Complete')}
      });
  }

  clear() {
    this.formGroup.reset();

  }

}
