import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servcie/api.service';
import { ThrowStmt } from '@angular/compiler';
import { Register } from '../models/register';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Total : number = 0;

  public types : any = [
    {
      title : 'CITAS AMBULATORIAS',
      concat : 'citasAmbulatorias'
    },
    {
      title : 'EXÁMENES',
      concat : 'examenes'
    },
    {
      title : 'CIRUGÍAS',
      concat : 'cirugias'
    },
    {
      title : 'DERIVACIONES',
      concat : 'derivaciones'
    }
  ];

  public derivaciones : any = [];
  public cirugias : any = [];
  public examenes : any = [];
  public citasAmbulatorias : any = [];

  public data : any;

  constructor(
    public api : ApiService
  ) { }

  ngOnInit(): void {
    this.api.getData().subscribe((result:Register[]) => {
      result.map( (item) => {
        if(item.tipo === 'Derivaciones') this.derivaciones.push(item);
        else if(item.tipo === 'Cirugías') this.cirugias.push(item);
        else if(item.tipo === 'Exámenes') this.examenes.push(item);
        else this.citasAmbulatorias.push(item);
        this.Total = this.Total + item.total;
      })
      this.data = [];
      this.types.map(item => {
        this.data.push(
          {
            title : item.title,
            tipo : item.concat,
            data : this[item.concat]
          }
        )
      })
    })
  }

}
