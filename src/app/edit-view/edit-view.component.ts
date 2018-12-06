import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EditView} from "./edit.view";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {

  color = new FormControl('');
  number = new FormControl('');
  first = new FormControl('');
  second = new FormControl('');
  third = new FormControl('');
  editViewForm: FormGroup;
  editView = new EditView();
  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.editViewForm = formBuilder.group( {
      'color': this.color,
      'number': this.number,
      'first': this.first,
      'second': this.second,
      'third': this.third
    });

    this.editViewForm.valueChanges.subscribe( value => {
      this.editView.color = value.color;
      this.editView.number = value.number;
      this.editView.first = value.first;
      this.editView.second = value.second;
      this.editView.third = value.third;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const editViewStr = JSON.stringify(this.editView);
    localStorage.setItem('keonTwitterApp', editViewStr);
    this.router.navigate(['/tweets']);
  }

}
