import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedPage(selectedPage:string){
    if(selectedPage == 'first-page' || !selectedPage){
      (document.getElementById('firstPage') as  HTMLElement).scrollIntoView({behavior:'smooth'})
    }else {
      (document.getElementById(`${selectedPage}Page`) as HTMLElement).scrollIntoView({behavior:'smooth'})
    }

  }


}

