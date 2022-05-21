import {ComponentFixture, TestBed, tick} from '@angular/core/testing';
import { EducationComponent } from './education.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationComponent ]
    });
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render sample degrees array testing', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let de:DebugElement[] = fixture.debugElement.queryAll(By.css('.each-degree-info'));
      expect(de.length).toBe(3);
      de.forEach((obj:DebugElement , index:number) => {
        expect(obj.children[0].children[1].nativeElement.innerHTML).toEqual(component.degrees[index].startDate + ' - ' + component.degrees[index].endDate);
        expect(obj.children[0].children[2].nativeElement.innerHTML).toEqual(component.degrees[index].degreeLevel);
        expect(obj.children[0].children[3].nativeElement.innerHTML).toEqual(component.degrees[index].country + ' - ' + component.degrees[index].city);
        expect(obj.children[1].children[1].nativeElement.innerHTML).toEqual(component.degrees[index].field);
        expect(obj.children[1].children[2].nativeElement.innerHTML).toEqual(component.degrees[index].university);
      });
      done();
    });

  });
});
