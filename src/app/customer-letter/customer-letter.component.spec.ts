import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLetterComponent } from './customer-letter.component';

describe('CustomerLetterComponent', () => {
  let component: CustomerLetterComponent;
  let fixture: ComponentFixture<CustomerLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
