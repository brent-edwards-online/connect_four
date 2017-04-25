import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';

function noop(value: any): void { }

@Component({
  selector: 'switch-control',
  templateUrl: './switchcontrol.component.html',
  styleUrls: ['./switchcontrol.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SwitchControlComponent }
  ]
})
export class SwitchControlComponent implements ControlValueAccessor {
  isOn: boolean;
  _onChange: (value: any) => void = noop;

  constructor() { }

  toggle(isOn: boolean){
    this.isOn = isOn;
    this._onChange(isOn);
  }

  writeValue(value: any): void {
      this.isOn = !!value;
    }
  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState(isDisabled: boolean): void {
    console.log(isDisabled);
  }

}
