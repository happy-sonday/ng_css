import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RctLayoutComponent } from './rct-layout.component';

describe('RctLayoutComponent', () => {
  let component: RctLayoutComponent;
  let fixture: ComponentFixture<RctLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RctLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RctLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
