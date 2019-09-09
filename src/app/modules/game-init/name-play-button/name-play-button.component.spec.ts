import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePlayButtonComponent } from './name-play-button.component';

describe('NamePlayButtonComponent', () => {
  let component: NamePlayButtonComponent;
  let fixture: ComponentFixture<NamePlayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamePlayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
