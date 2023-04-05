import { Component,OnInit } from '@angular/core';
 import {FormBuilder,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
//import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  constructor(private fb: FormBuilder){}
  selected = 'Hyderabad';
  // matcher = new MyErrorStateMatcher();
  hideRequiredControl = new FormControl(false);
  Value1:string="male";
  //phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  todoForm = this.fb.group({
    name: ["", Validators.compose([Validators.required, Validators.minLength(5)])],
    completed: [this.Value1, Validators.compose([Validators.required])],
    select: ["", Validators.compose([Validators.required])],
    //date: ["", Validators.compose([Validators.required])],
    city: [this.selected, Validators.compose([Validators.required])],
    //mobile: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)]),
    mobile: ["", Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
    password: ["", Validators.compose([Validators.required,Validators.minLength(8)])],
  })

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  Incompleted:boolean=true;
   Done1:boolean=false;
  matcher = new MyErrorStateMatcher();

  onSubmit(event: any) {
    event.preventDefault();
     console.log("form is submitted");
    if (this.todoForm.invalid) {
      console.log("form is Invalid");
      //const formValues=this.todoForm.value
      //console.log(formValues)
      return
    }
    const formValues={...this.todoForm.value,email:this.emailFormControl.value}
    console.log("form is Valid");
    console.log(formValues)
  }





  changeGender(event:any) {
    this.Value1=event.value
    // console.log(this.todoForm.value);
    // console.log(typeof(event.value))
  }

  }


  export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }








