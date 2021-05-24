import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneDashboardComponent } from './lane-dashboard.component';

describe('LaneDashboardComponent', () => {
  let component: LaneDashboardComponent;
  let fixture: ComponentFixture<LaneDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
