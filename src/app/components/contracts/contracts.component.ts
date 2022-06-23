import { Component, OnInit } from '@angular/core';
import { Contractor } from 'src/app/models/contractor';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  client: string = 'John Doe';
  contracts: Contractor[] = [
    {
      name: 'Darlene Robertson',
      type: 'traditional',
      start_date: '2021/03/04',
      amount: 200,
      status: 'active',
      picture: 'assets/images/person1.png'
    },
    {
      name: 'Mia Smith',
      type: 'regular',
      start_date: '2021/03/04',
      amount: 500000,
      status: 'active',
      picture: 'assets/images/person2.png'
    },
    {
      name: 'Sara Murdock',
      type: 'traditional',
      start_date: '2021/03/04',
      amount: 480000,
      status: 'signature pending',
      picture: 'assets/images/person3.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
