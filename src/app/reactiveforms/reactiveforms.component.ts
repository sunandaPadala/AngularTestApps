import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phonenumber: new FormControl(''),
    emailid: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    gender: new FormControl(''),
  });
  city: any;
   cities = [
    {name: 'Andhra Pradesh', code: 'AP'},
    {name: 'TamilNadu', code: 'TN'},
    {name: 'Kerala', code: 'KL'},
    {name: 'Hariyana', code: 'HY'},
    {name: 'Odissa', code: 'OD'},
    {name: 'Gujarat', code: 'GJ'},
    {name: 'Maharastra', code: 'MR'},
    {name: 'Karnataka', code: 'KT'},
    {name: 'Punjab', code: 'PJ'},
    {name: 'Jarakhand', code: 'JK'}
];
text = [];
constructor() {}
ngOnInit(): void {}
search(event){
  this.text = this.cities.filter(c => c.name.startsWith(event.query));
}
}

