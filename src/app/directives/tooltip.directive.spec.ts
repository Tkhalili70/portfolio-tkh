import {TooltipDirective} from "./tooltip.directive";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {Component} from "@angular/core";

@Component({
  template:`
    <i  aria-hidden="true" [tooltip]="'test'"></i>
  `
})
class ToolTipHostComponent{}

describe('TooltipDirective' , () => {
  let component:ToolTipHostComponent;
  let fixture:ComponentFixture<ToolTipHostComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[ToolTipHostComponent, TooltipDirective]
    });
    fixture = TestBed.createComponent(ToolTipHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should show tooltip',  ()  => {
    let de = fixture.debugElement.queryAll(By.css('i'))[0];
    let tooltipDirective = de.injector.get(TooltipDirective);
    expect(tooltipDirective.tooltip).toEqual('test');
  });

});
