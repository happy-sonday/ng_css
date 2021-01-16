import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMarginComponent } from './auto-margin.component';

describe('AutoMarginComponent', () => {
  let component: AutoMarginComponent;
  let fixture: ComponentFixture<AutoMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMarginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
