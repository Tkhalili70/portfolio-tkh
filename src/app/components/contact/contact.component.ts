import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {MailService} from "../services/mail.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form:FormGroup = this.formBuilder.group({
    name: ['' , Validators.required],
    email:['' , [Validators.required, Validators.email]],
    subject:['' , Validators.required],
    description:['' , Validators.required]
  });

  constructor(private formBuilder:FormBuilder , private mail:MailService) { }

  errorMessage!:string ;
  ngOnInit(): void {

  }
  get registerFormControl() {
    return this.form.controls;
  }
  onSubmit(){
    if(!this.form.valid){
      return
    }
    this.mail.sendEmail(this.form.value).subscribe(x => {
     this.form.reset();
     alert('Send Successfully');
    }, error => {
      this.errorMessage = error.responseText;
      console.warn(error.responseText)
    })
  }
}
