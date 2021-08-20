import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {

  cardNumber = '################'
  newNum = this.cardNumber.split('').join(' ')
  constructor() { }

  ngOnInit(): void {
    let newNum = this.cardNumber.split('').join(' ')
    console.log(newNum)
  }

}
