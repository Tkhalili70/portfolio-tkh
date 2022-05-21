import { Component, OnInit } from '@angular/core';
import {ProjectModel} from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:ProjectModel[] = [
    {
      title:'Portfolio' ,
      previewAddress:'' ,
      gitAddress:'' ,
      description:'Personal Portfolio',
      language:'Angular',
      img:'../../../assets/img/portfolio.png'
    },
    // {
    //   title:'Calculator' ,
    //   previewAddress:'tkhalili70.github.io/calculator-prj/' ,
    //   gitAddress:'https://github.com/Tkhalili70/calculator-prj' ,
    //   description:'Calculator Project',
    //   language:'Angular',
    //   img:'../../../assets/img/calculator.png'
    // },
    {
      title:'RoboFriends' ,
      previewAddress:'https://tkhalili70.github.io/robofriends/' ,
      gitAddress:'https://github.com/Tkhalili70/robofriends' ,
      description:'Search a robot name',
      language:'React',
      img:'../../../assets/img/robofriends.png'
    },
    {
      title:'Form' ,
      previewAddress:'https://tkhalili70.github.io/robofriends/' ,
      gitAddress:'https://github.com/Tkhalili70/robofriends' ,
      description:'Form you can add address and visibility based on user role , it also has push notification',
      language:'Angular',
      img:'../../../assets/img/auth-form-pwa.png'
    },
    {
      title:'Travelly' ,
      previewAddress:'https://tkhalili70.github.io/html-css-try/' ,
      gitAddress:'https://github.com/Tkhalili70/html-css-try' ,
      description:'Travelly site',
      language:'HTML/CSS',
      img:'../../../assets/img/travelly.png'
    },
    {
      title:'Twitter' ,
      previewAddress:'https://tkhalili70.github.io/twitter-project/' ,
      gitAddress:'https://github.com/Tkhalili70/twitter-project' ,
      description:'twitter-project',
      language:'HTML/CSS',
      img:'../../../assets/img/twitter.png'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickOnImage(item:string){
    window.open(item, "_blank");
    console.log(item , 'here')
  }
}
