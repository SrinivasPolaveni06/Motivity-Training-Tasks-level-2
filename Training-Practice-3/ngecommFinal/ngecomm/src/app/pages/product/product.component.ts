import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // title = "mackBook";
  // get validateTitle() {
  //   if (!this.title) {
  //     return "Title Can't Be Empty"
  //   }
  //   if (this.title.length < 5) {

  //     return "Title Should be More Than 5 Characters"
  //   }
  //   if (this.title.length > 9) {
  //     return "Title Should be less Than 9 Characters"
  //   }
  //   else {
  //     return ''
  //   }
  // }
  // titleErrors() {
  //   if (!this.title) {
  //     return "Title Can't Be Empty"
  //   }
  //   if (this.title.length < 5) {

  //     return "Title Should be More Than 5 Characters"
  //   }
  //   if (this.title.length > 9) {
  //     return "Title Should be less Than 9 Characters"
  //   }
  //   else {
  //     return ''
  //   }
  // }



  productForm = this.fb.group({
    title: ["", Validators.compose([Validators.required, Validators.minLength(5)])],
    description: ["", Validators.compose([Validators.required])],
    image: ["", Validators.compose([Validators.required])],
    price: ["", Validators.compose([Validators.required])],
  })


  id: any = '';
  constructor(private fb: FormBuilder, private srv: ProductService, private router: Router, private ar: ActivatedRoute) {

  }

  // productForm = new FormGroup({
  //   title: new FormControl("mackbook", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])),
  //   price: new FormControl("", Validators.compose([Validators.required, Validators.pattern('[0-9\.]*')]))
  // })

  ngOnInit(): void {
    this.ar.params.subscribe((params: any) => {
      console.log(params)

      if (params.id) {
        this.id = params.id
        this.getProduct()
      }

    })
  }


  // onTitleKeyUp() {
  //   //console.log("i am executed on key up event")
  // }

  onSubmit(event: any) {
    event.preventDefault();
    console.log("form is submitted");
    if (this.productForm.invalid) {
      return
    }
    console.log(this.productForm.value);



    if (this.id) {
      this.srv.update(this.productForm.value, this.id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/')
        }
      })
      return
    }



    this.srv.create(this.productForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert("creating product")
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete");
      }
    })
  }

  getProduct() {
    this.srv.singleProduct(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.productForm.patchValue(res)
      }
    }
    )
  }


}
