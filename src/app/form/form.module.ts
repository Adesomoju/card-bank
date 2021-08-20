import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({
    declarations: [FormComponent ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    providers: []
  })
  export class FormModule { }