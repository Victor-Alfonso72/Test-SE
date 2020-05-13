import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {
  
  displayedColumns = ['sucursal','prevision', 'tipo', 'cantidad' , 'anio', 'total'];
  public width : number = window.innerWidth;
  

  constructor(
    public dialogRef: MatDialogRef<DialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.itemsTable();
    }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    this.itemsTable();
  }

  itemsTable() : void{
    if(this.width < 771) {
      this.displayedColumns = ['sucursal','total'];
    }
  }

  getTotalCost() {
    return this.data.data.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
  }

}
