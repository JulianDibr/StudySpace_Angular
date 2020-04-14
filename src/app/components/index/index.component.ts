import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', './index-common.css']
})
export class IndexComponent implements OnInit {
  welcomeText = 'Willkommen bei StudySpace, <br>dem Netzwerk für Studierende';
  constructor() {}

  ngOnInit() {
  }

}
