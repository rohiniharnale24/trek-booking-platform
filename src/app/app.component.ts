import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { log } from 'node:console';
import { filter } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {

  }  
}
