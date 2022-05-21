import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  socialMediaClick(media:string){
    if(media === 'github'){
      window.open('https://github.com/Tkhalili70', "_blank");
    }else if(media === 'linkdin'){
        window.open('https://www.linkedin.com/in/tannaz-k-a8427716a', "_blank")
    }
  }

  onDownloadCV(){
      window.open("../../../assets/resume-khalili.en.pdf");
  }

}
