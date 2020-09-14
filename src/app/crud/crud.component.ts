import { APIconnectService } from './../apiconnect.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  crudForm: FormGroup;
  constructor(protected fb: FormBuilder, private api: APIconnectService) {}

  ngOnInit(): void {
    this.formBuilder();
  }

  addData() {
    if (this.crudForm.valid) {
      let obj = this.crudForm.getRawValue();
      this.api.addFood(obj).subscribe(
        (res) => {
          alert('Add success');
          this.crudForm.reset();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('Check data kembali!');
    }
  }

  formBuilder() {
    this.crudForm = this.fb.group({
      foodName: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }
}
