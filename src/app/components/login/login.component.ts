import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;
  constructor(private fb : FormBuilder) { }
   
  ngOnInit(): void {
  this.loginForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required]
  })
  }
  submit(){
    this.loginForm.reset();
    if(this.loginForm.valid){
      console.log(this.loginForm)
    }
  }
}
