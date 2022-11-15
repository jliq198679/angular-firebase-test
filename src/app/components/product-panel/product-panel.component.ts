
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListProducts } from 'src/app/state/selectors/products.selectors';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.scss']
})
export class ProductPanelComponent implements OnInit {

  products$: Observable<any> = new Observable()

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.products$ = this.store.select(selectListProducts)
  }

}
