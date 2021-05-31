import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInfoComponent } from './pending-info.component';

describe('PendingInfoComponent', () => {
  let component: PendingInfoComponent;
  let fixture: ComponentFixture<PendingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
