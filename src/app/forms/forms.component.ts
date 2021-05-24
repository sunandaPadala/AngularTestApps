import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phonenumber: new FormControl(''),
      emailid: new FormControl(''),
      address: new FormControl(''),
    });

  constructor() {
   }

  ngOnInit(): void {
  }

}
