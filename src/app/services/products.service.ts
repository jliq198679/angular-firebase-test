
import { ProductModel } from './../models/product.interface';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Mock data
  data: ProductModel[] = this.mockDataList;

  constructor(private db: AngularFirestore) { }

  get(): Observable<any[]> {
      return this.db.collection('products').valueChanges({ idField: 'id' });
  }

  add(product: ProductModel): Observable<any> {
    const id = this.db.createId()
    return from(this.db.collection("products").doc(id).set({ ...product, id }))
  }

  edit(product: ProductModel): Observable<any> {
    return from(this.db.collection('products').doc(product.id).update(product));
  }

  remove(id: string): Observable<any> {
    console.log(id)
    return from(this.db.collection('products').doc(id).delete());
  }

  get mockDataList(): ProductModel[] {
    return [
      {
        id: '0001',
        name: "Pantalon",
        serial_number: 'SN0001',
        price: 10.5,
      },
      {
        id: '0002',
        name: "Camisa",
        serial_number: 'SN0002',
        price: 8,
      },
      {
        id: '0003',
        name: "Chancletas",
        serial_number: 'SN0003',
        price: 5.3,
      },
      {
        id: '0004',
        name: "Medias",
        serial_number: 'SN0004',
        price: 3.2,
      },
      {
        id: '0005',
        name: "Tenis",
        serial_number: 'SN0005',
        price: 16.8,
      },
      {
        id: '0006',
        name: "Bermuda",
        serial_number: 'SN0006',
        price: 7.55,
      },
      {
        id: '0007',
        name: "Sombrero",
        serial_number: 'SN0007',
        price: 3.58,
      },
      {
        id: '0008',
        name: "Guantes",
        serial_number: 'SN0008',
        price: 4.30,
      },
      {
        id: '0009',
        name: "Reloj",
        serial_number: 'SN0009',
        price: 19,
      },
      {
        id: '0010',
        name: "Espejueos",
        serial_number: 'SN0010',
        price: 4.50,
      },
      {
        id: '0011',
        name: "Sombrilla",
        serial_number: 'SN0011',
        price: 20.10,
      },
      {
        id: '0012',
        name: "Cinto",
        serial_number: 'SN0012',
        price: 8.20,
      }
    ]
  }



}
