import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent{
  @ViewChild('.frontend') frontend:any;
  @ViewChild('.developer') developer:any;
}
