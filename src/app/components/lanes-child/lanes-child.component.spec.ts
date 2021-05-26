import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanesChildComponent } from './lanes-child.component';

describe('LanesChildComponent', () => {
  let component: LanesChildComponent;
  let fixture: ComponentFixture<LanesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
