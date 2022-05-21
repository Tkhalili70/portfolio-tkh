import { ContactComponent } from './contact.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MailService} from "../services/mail.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EMPTY, from} from "rxjs";
import {By} from "@angular/platform-browser";

describe('ContactComponent', () => {
  // *********************************************** unit test
 /*   let component: ContactComponent;
    let service:MailService;
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    beforeEach(() => {
      service =  new MailService(httpClientSpy);
      component = new ContactComponent(new FormBuilder() , service);
    })

    it('should  create a form with four formControls', function () {
      expect(component.form.contains('name')).toBeTruthy();
      expect(component.form.contains('email')).toBeTruthy();
      expect(component.form.contains('subject')).toBeTruthy();
      expect(component.form.contains('description')).toBeTruthy();

    });
    it('should  make the name control required', function () {
      let control = component.form.get('name');
      control?.setValue('');
      expect(control?.valid).toBeFalsy();
    });
    it('should make the email control required', function () {
      let control = component.form.get('email');
      control?.setValue('');
      expect(control?.valid).toBeFalsy();
    });
    it('should make the subject control required', function () {
      let control = component.form.get('subject');
      control?.setValue('');
      expect(control?.valid).toBeFalsy();
    });
    it('should make the description control required', function () {
      let control = component.form.get('description');
      control?.setValue('');
      expect(control?.valid).toBeFalsy();
    });
    it('should make the email control valid', function () {
      let control = component.form.get('email');
      control?.setValue('khalili_tannaz@yahoo.com')
      expect(control?.value).toContain('@');
    });

    it('should call the server to send email',  () => {
      let spy = spyOn(service , 'sendEmail').and.returnValue(from(EMPTY));
      component.onSubmit();
      if(component.form.valid) {
        expect(spy).toHaveBeenCalled();
      }else {
        expect(spy).not.toHaveBeenCalled();
      }
    });
    it('should get response from the server in sendEmail service',  () => {
      let spy = spyOn(service , 'sendEmail').and.callFake(t => {
        return from(EMPTY);
      });
      component.onSubmit();
      if(component.form.valid){
        expect(spy).toHaveBeenCalled();
      }
    });
    it('should set message property if the server returns an error when send email',  () => {
      let error = 'error from the server';
      spyOn(service , 'sendEmail').and.returnValue(throwError(error));
      component.onSubmit();
      if (component.form.valid){
        expect(component.errorMessage).toBe(error);
      }


    });
    */
  // **************************************** integration test

  let component:ContactComponent;
  let fixture:ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, ReactiveFormsModule],
      declarations:[ContactComponent],
      providers:[MailService , FormBuilder]
    });

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should call the server to send email',  () => {
    let service = fixture.debugElement.injector.get(MailService);
    let spy = spyOn(service , 'sendEmail').and.returnValue(from(EMPTY));
    let submitButton = fixture.debugElement.query(By.css('.submit-btn'));
    submitButton.triggerEventHandler('click' , null);
    if(component.form.valid) {
      expect(spy).toHaveBeenCalled();
    }else {
      expect(spy).not.toHaveBeenCalled();
    }
  });

});
