import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  ProductsArr : Array<any> =[];

  @ViewChild('image') image?: ElementRef<HTMLInputElement>;


  constructor(private products: ProductsService) {
    
  }
  ngOnInit(){
    this.products.getProducts().subscribe(cs =>{
      this.ProductsArr = cs.map (x=> {
        return {
          id : x.payload.doc.id,
          ...x.payload.doc.data() as { }
        }
      })
    })
  }

  addNewProduct(f: NgForm){
    let name= f.value.name,
        price=f.value.price,
        image = this.image?.nativeElement?.files?.[0];

        if (name && price && image) {
          this.products.addProduct(name, price, image);
        }
  }

  updateProductPrice(index : any){
    this.products.UpdateProducts(this.ProductsArr[index].id, this.ProductsArr[index].Price)
  }

  deleteProduct(index : any){
    this.products.deleteProducts(this.ProductsArr[index].id)
  }



}
