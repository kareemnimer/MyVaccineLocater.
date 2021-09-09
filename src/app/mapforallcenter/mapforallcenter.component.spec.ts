import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapforallcenterComponent } from './mapforallcenter.component';

describe('MapforallcenterComponent', () => {
  let component: MapforallcenterComponent;
  let fixture: ComponentFixture<MapforallcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapforallcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapforallcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
