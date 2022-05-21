import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {ExperienceChildComponent} from "./experience-child/experience-child.component";

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceComponent , ExperienceChildComponent ],
      // schemas:[NO_ERRORS_SCHEMA]
    })
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should render experience child component', (done) => {
    let de:DebugElement[] = fixture.debugElement.queryAll(By.css('.experience-box'));
    expect(de).toBeTruthy();
    done();
  });
});
