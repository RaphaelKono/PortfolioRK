import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit{
  @ViewChild('.frontend') frontend:any;
  @ViewChild('.developer') developer:any;

  ngOnInit(){
    console.log(this.frontend,this.developer);
  }
}
