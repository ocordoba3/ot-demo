import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from 'src/app/models/contractor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: Contractor[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
