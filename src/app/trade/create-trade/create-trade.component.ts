import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-trade',
  imports: [ReactiveFormsModule,],
  templateUrl: './create-trade.component.html',
  styleUrl: './create-trade.component.scss'
})

export class CreateTradeComponent {
  uploadForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      fileType: [''],
      file: [''],
      daAccess: [''],
      projectEngineer: [''],
      approver1: [''],
      approver2: [''],
      approver3: [''],
      approver4: [''],
    });
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      console.log(this.uploadForm.value);
      // Handle form submission
    }
  }

  onClose() {
    // Handle close action
  }


}
