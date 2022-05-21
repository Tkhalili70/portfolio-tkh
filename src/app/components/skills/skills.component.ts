import {Component, HostListener, OnInit} from '@angular/core';
import {SkillModel} from "../../models/skill.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skills:SkillModel[] = [
    {title:'Angular' , percentage:75},
    {title:'JavaScript' , percentage:80},
    {title:'TypeScript' , percentage:70},
    {title:'HTML, CSS' , percentage:70},
    {title:'React' , percentage:50},
    {title:'Rxjs' , percentage:60},
    {title:'Flutter' , percentage:30},
    {title:'Devextreme' , percentage:65},
    {title:'BootStrap' , percentage:65},
    {title:'Git' , percentage:70},
    {title:'Sass/Less' , percentage:70},
    {title:'Rest api' , percentage:70},
    {title:'MYSQL' , percentage:50},
    {title:'Net+' , percentage:60},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  getYPosition() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 40;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}
