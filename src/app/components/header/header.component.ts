import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: { title: string, icon: string }[] = [
    {title: 'Tannaz Khalili', icon: 'fa fa-home'},
    {title: 'about', icon: 'fa fa-info-circle'},
    {title: 'experience', icon: 'fa fa-code'},
    {title: 'skills', icon: 'fa fa-tasks'},
    {title: 'projects', icon: 'fa fa-file'},
    {title: 'education', icon: 'fa fa-university'},
    {title: 'contact', icon: 'fa fa-envelope'}]
  @Output() selectedPage = new EventEmitter<string>();
  selectedTitle: any = '';
  innerWidth: any;

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  navigate(item: string) {
    this.selectedTitle = item;
    let routes: any = {
      'about': 'about',
      'contact': 'contact',
      'education': 'education',
      'experience': 'experience',
      'home': 'home',
      'skills': 'skills',
      'projects': 'projects',
      'first-page': 'first-page',
      'default': 'first-page',
    };
    this.selectedPage.emit(routes[item] || routes['default'])

  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

}


