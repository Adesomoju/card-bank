import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebitCardComponent } from './debit-card.component';

@NgModule({
    declarations: [DebitCardComponent ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    providers: []
  })
  export class DebitCardModule { }