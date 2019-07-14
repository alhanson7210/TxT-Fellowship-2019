import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AstMemoryEfficientTransformer }  from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webForm';
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
        name: ['', Validators.required],
        message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if(this.messageForm.invalid) {
      return;
    }
    
    this.success = true;
  }

  getName() {
    {return this.messageForm.get('name')}
  }
  
}
