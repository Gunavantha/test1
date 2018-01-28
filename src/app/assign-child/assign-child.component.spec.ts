import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignChildComponent } from './assign-child.component';

describe('AssignChildComponent', () => {
  let component: AssignChildComponent;
  let fixture: ComponentFixture<AssignChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
