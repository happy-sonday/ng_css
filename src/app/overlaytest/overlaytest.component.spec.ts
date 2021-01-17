import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaytestComponent } from './overlaytest.component';

describe('OverlaytestComponent', () => {
  let component: OverlaytestComponent;
  let fixture: ComponentFixture<OverlaytestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlaytestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
