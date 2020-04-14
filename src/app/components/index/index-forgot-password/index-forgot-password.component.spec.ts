import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexForgotPasswordComponent } from './index-forgot-password.component';

describe('IndexForgotPasswordComponent', () => {
  let component: IndexForgotPasswordComponent;
  let fixture: ComponentFixture<IndexForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
