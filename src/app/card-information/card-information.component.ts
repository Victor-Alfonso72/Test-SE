import { Component, OnInit, Input, AfterViewInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit, AfterViewInit {

  @Input() dataRecived: any;

  public cantidadFonsa : number = 0;
  public cantidadIsapre : number = 0;
  public cantidad : number = 0;
  public Total : number = 0;

  constructor(public dialog: MatDialog) { 
    
  }


  Opendetail(): void {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      width: window.innerWidth > 771 ? '70%' : '95%',
      data: this.dataRecived,
      panelClass: 'dialog-detail-data'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  ngOnInit(): void {
      this.dataRecived.data.map( (item) => {
        if(this.dataRecived.tipo == 'citasAmbulatorias') {
          if(item.prevision == 'Fonasa') this.cantidadFonsa = this.cantidadFonsa + item.cantidad;
          if(item.prevision == 'Isapre') this.cantidadIsapre = this.cantidadIsapre + item.cantidad;
        }else{
          this.cantidad = this.cantidad + item.cantidad;
        }

        this.Total = this.Total + item.total;
      })
    
  }

  ngAfterViewInit(){
    
  }



}
