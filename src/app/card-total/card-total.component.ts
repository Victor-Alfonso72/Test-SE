import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-total',
  templateUrl: './card-total.component.html',
  styleUrls: ['./card-total.component.css']
})
export class CardTotalComponent implements OnInit {

  @Input() total: any;

  constructor() { }

  ngOnInit(): void {
  }

}
