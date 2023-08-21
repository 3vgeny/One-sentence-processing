import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFieldComponent } from './request-field.component';

describe('RequestFieldComponent', () => {
  let component: RequestFieldComponent;
  let fixture: ComponentFixture<RequestFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestFieldComponent]
    });
    fixture = TestBed.createComponent(RequestFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
