import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-forgot-password',
  templateUrl: './index-forgot-password.component.html',
  styleUrls: ['./index-forgot-password.component.css', '../index-common.css']
})
export class IndexForgotPasswordComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit() {
  }

}
