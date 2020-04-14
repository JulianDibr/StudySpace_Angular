import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStartComponent } from './index-start.component';

describe('IndexStartComponent', () => {
  let component: IndexStartComponent;
  let fixture: ComponentFixture<IndexStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
