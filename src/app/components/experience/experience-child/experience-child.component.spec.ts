import { ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {By} from "@angular/platform-browser";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {ExperienceChildComponent} from "./experience-child.component";

describe('ExperienceChildComponent', () => {
  let component: ExperienceChildComponent;
  let fixture: ComponentFixture<ExperienceChildComponent>;


  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ExperienceChildComponent],
      schemas: [NO_ERRORS_SCHEMA],

    });
    fixture = TestBed.createComponent(ExperienceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders without errors', () => {
    expect(component).toBeTruthy();
  });
  it('should render experienceDetail array testing',  fakeAsync(() => {
      fixture.whenStable().then(() => {
        component.ngOnInit();
        let de:DebugElement[] = fixture.debugElement.queryAll(By.css('.experience'));
        console.log(de.length , 'de.length')

        de.forEach((obj:DebugElement , index) => {
          console.log(obj , 'obj')
          expect(obj.children[0].children[0].nativeElement.innerHTML).toEqual(component.getMonth(component.experienceDetail[index].startDate))
          // expect(obj.children[0].children[0].nativeElement.innerHTML).toEqual(component.experienceDetail[index].startDate)
        });
      });
    fixture.detectChanges();
    tick();



  }) );
});
