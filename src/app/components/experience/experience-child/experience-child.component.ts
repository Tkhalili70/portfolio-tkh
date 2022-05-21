import {Component, Input, OnInit} from '@angular/core';
import {ExperienceModel} from "../../../models/experience.model";
import {DateService} from "../../../utils/date.service";

@Component({
  selector: 'app-experience-child',
  templateUrl: './experience-child.component.html',
  styleUrls: ['./experience-child.component.scss']
})
export class ExperienceChildComponent implements OnInit {
  @Input() experienceDetail!:ExperienceModel[];
  constructor(private date:DateService) { }
  currentDate = this.date.currentDate;

  ngOnInit(): void {
  }

  getMonth(date?: Date){
    if(date?.getTime() != this.currentDate.getTime()){
      return date?.toLocaleString('en-us', { month: 'long' })
    }else {
      return ''
    }

  }

  getYear(date?: Date){
    if(date?.getTime() !== this.currentDate.getTime()){
      return date?.getFullYear();
    }else {
      return 'Present'
    }

  }
}
