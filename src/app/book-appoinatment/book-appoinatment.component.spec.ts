import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppoinatmentComponent } from './book-appoinatment.component';

describe('BookAppoinatmentComponent', () => {
  let component: BookAppoinatmentComponent;
  let fixture: ComponentFixture<BookAppoinatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAppoinatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppoinatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
