import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectModel} from "../../models/project.model";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit , AfterViewInit{

  @Output() clickOnItemGit:EventEmitter<any> = new EventEmitter<any>();
  @Output() clickOnItemPreview:EventEmitter<any> = new EventEmitter<any>();

  @Input() data!: any[];
  public selectedItem!: ProjectModel;

  fill = "fill";
  empty = "empty";

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.selectedItem = this.data[0];
  }

  ngAfterViewInit(){
    const icons = this.elementRef.nativeElement.querySelectorAll('.dvIcon');
    for (let i = 0; i < icons.length; i++) {
      icons[i].children[0].className = this.empty;
      icons[0].children[0].className = this.fill;
    }
  }

  change(index:any, event:any) {
    let icons = this.elementRef.nativeElement.querySelectorAll('.dvIcon');
    let img = this.elementRef.nativeElement.querySelector('#showImg');
    img.animate(this.getAnimation() , this.getAnimationTiming())
    icons.forEach((element:any) => {
      element.children[0].className = this.empty;
    });
    event.currentTarget.children[0].className = this.fill;
    this.selectedItem = this.data[index];
  }
  getAnimation() {
    return [
      { transform: 'translateX(-100%) ' ,opacity: '0.1' },
      { transform: 'translateX(-50%) ' ,opacity: '0.5'},
      { transform: 'translateX(0%)',opacity: '1' },
    ];
  }

  getAnimationTiming() {
    return {
      duration: 500,
      iterations: 1,
    };
  }

  onSelectProject(address?:string , item?:string){
    if(item === 'git') {
      this.clickOnItemGit.emit(address);
    }else if (item === 'preview'){
      this.clickOnItemPreview.emit(address);
    }

  }
}
