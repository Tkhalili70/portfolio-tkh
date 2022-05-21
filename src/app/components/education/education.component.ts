import { Component, OnInit } from '@angular/core';
import {DegreeModel} from "../../models/degree.model";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  degrees:DegreeModel[] = [
    {degreeLevel:'Master (MSc/MA)' , startDate:'2014' , endDate:'2018', city:'Tehran' , country:'IRAN' , field:'Telecommunication Engineering' , university:'Islamic Azad University of yadegar emam'},
    {degreeLevel:'Bachelor(BSc/BA)' , startDate:'2009' , endDate:'2013', city:'Tehran' , country:'IRAN' , field:'Electronic engineering' , university:'Shariati Technical and Vocational College'},
    {degreeLevel:'Diploma' , startDate:'2008' , endDate:'2009', city:'Tehran' , country:'IRAN' , field:'Mathematics' , university:'Rahe Hoda'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
