import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() card_num
  @Input() card_month
  @Input() card_year

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const payload = {
      num : this.card_num,
      month: this.card_month,
      year: this.card_year,
    }
    this.clearValue
    console.log(payload)
  }  

  clearValue(){
    this.card_year = ''
    this.card_num = ''
    this.card_month = ''
  }

}
