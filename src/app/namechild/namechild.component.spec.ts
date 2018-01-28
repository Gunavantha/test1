import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamechildComponent } from './namechild.component';

describe('NamechildComponent', () => {
  let component: NamechildComponent;
  let fixture: ComponentFixture<NamechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
