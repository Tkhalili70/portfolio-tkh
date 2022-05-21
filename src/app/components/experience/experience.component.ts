import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from "../../models/experience.model";
import {DateService} from "../../utils/date.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor(private date:DateService) {}
  experienceDetail:ExperienceModel[] = [
    {
      companyName:'Sadad Informatics Corporation' ,
      jobTitle:'Front-end Developer',
      industryCategory:'Banking',
      employmentType:'Full Time',
      startDate:new Date('May 2022'),
      endDate:this.date.currentDate,
      country:'IRAN',
      city:'Tehran',
      technologies: ['Angular', 'TypeScript' ,'JavaScript', 'HTML', 'CSS', 'Sass', 'Agile']
    },
    {
      companyName:'Rahyab Rayaneh Gostar' ,
      jobTitle:'Front-end Developer',
      industryCategory:'Transport & Logistics (IT & Software Services)',
      employmentType:'Full Time',
      startDate:new Date('July 2021'),
      endDate:new Date('March 2022'),
      country:'IRAN',
      city:'Tehran',
      technologies: ['Angular', 'TypeScript' ,'JavaScript', 'Devextreme', 'HTML', 'CSS', 'Sass', 'Agile']
    },
    {
      companyName:'Osveh' ,
      jobTitle:'Front-end Developer',
      industryCategory:'Banking (IT & Software Services)',
      employmentType:'Full Time',
      startDate:new Date('March 2019'),
      endDate:new Date('June 2021'),
      country:'IRAN',
      city:'Tehran',
      technologies: ['Angular', 'TypeScript','Javascript', 'PrimeNg', 'HTML', 'CSS', 'Sass', 'MySQL']
    },
  ]


  ngOnInit(): void {
  }

}
