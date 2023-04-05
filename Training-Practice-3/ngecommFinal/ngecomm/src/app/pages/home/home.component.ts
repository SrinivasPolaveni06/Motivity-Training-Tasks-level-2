import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any = [];
  productUnSelectedIcon = "favorite_outlined"
  constructor(private srv: ProductService, private router: Router) {
    // this.srv.all().subscribe()
    // inseted of writing above line we put this line in our own custom functon "getAllProducts()"

  }
  ngOnInit(): void {
    console.log("i am executed whenever the component initialise");
    this.getAllProducts() // this functon executed when ever the component initiated
  }
  ngAfterViewInit() {
    console.log("i am executed after home html component")
  }
  getAllProducts() {
    this.srv.all().subscribe(

      // (res)=>{
      //   console.log(res)
      // },                               // this is previous version of sunscribe
      // (err)=>{
      //   console.log(err)
      // }


      {
        next: (res) => {
          console.log("i am executed on success");
          console.log(res);
          this.products = res;

        },
        error: () => {
          console.log("i am executed on error")
        },
        complete: () => {
          console.log("i am executed even after success or failure")
        }
      }



    )
  }
  toggleProductSelection(event: any, product: any) {
    product.selected = !product.selected
  }
  SelectionIcon(product: any) {

    // if (product.selected) {
    //   return "favorite";
    // }
    // else {
    //   return "favorite_outlined"
    // }
    return product.selected ? "favorite" : "favorite_outlined"
  }
  formatPrice(price: any) {

    return price.toFixed(2)
  }


  onEdit(event: any, product: any) {
    this.router.navigateByUrl('/product/' + product._id)
  }
}
