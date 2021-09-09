import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForSpecVacComponent } from './search-for-spec-vac.component';

describe('SearchForSpecVacComponent', () => {
  let component: SearchForSpecVacComponent;
  let fixture: ComponentFixture<SearchForSpecVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForSpecVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForSpecVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
