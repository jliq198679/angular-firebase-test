import { ProductModel } from './../../models/product.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public product: ProductModel
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.product?.name || null, [Validators.required]],
      serial_number: [this.product?.serial_number || null, [Validators.required]],
      price: [this.product?.price || null, [Validators.required]]
    });
  }

  addProduct() {
    if(this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
