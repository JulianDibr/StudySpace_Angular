import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRegisterComponent } from './index-register.component';

describe('IndexRegisterComponent', () => {
  let component: IndexRegisterComponent;
  let fixture: ComponentFixture<IndexRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
