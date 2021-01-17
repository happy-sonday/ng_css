import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGrownshrinkComponent } from './flex-grownshrink.component';

describe('FlexGrownshrinkComponent', () => {
  let component: FlexGrownshrinkComponent;
  let fixture: ComponentFixture<FlexGrownshrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexGrownshrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexGrownshrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
