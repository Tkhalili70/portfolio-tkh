import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[RouterTestingModule.withRoutes([])],
        declarations:[AppComponent]
      });
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  it('should have router outlet',  ()  => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });
});
