import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppoSpcCenterComponent } from './book-appo-spc-center.component';

describe('BookAppoSpcCenterComponent', () => {
  let component: BookAppoSpcCenterComponent;
  let fixture: ComponentFixture<BookAppoSpcCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAppoSpcCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppoSpcCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
