import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameparentcomponentComponent } from './nameparentcomponent.component';

describe('NameparentcomponentComponent', () => {
  let component: NameparentcomponentComponent;
  let fixture: ComponentFixture<NameparentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameparentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameparentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
