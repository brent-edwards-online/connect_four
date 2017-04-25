import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, FormArray, Validators } from '@angular/forms';
import { SwitchControlComponent } from '../switchcontrol/switchcontrol.component';

function passwordMatches(ctrl: AbstractControl){
  return ctrl.get('password').value === ctrl.get('confirm').value ? null: {'nomatch': true};
}

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  ddForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.ddForm = this.fb.group({
      firstname:'',
      lastname:'',
      account: this.fb.group({
        username:'',
        password:['',Validators.required],
        confirm:['',Validators.required]
      }, {validator: passwordMatches}),
      newsletter: false
    });

    this.ddForm.patchValue({
      firstname: 'Brent',
      lastname: 'Edwards'
    });

    
  }

  ngOnInit() {
  }

  switchClick():void {
      
  }

}
