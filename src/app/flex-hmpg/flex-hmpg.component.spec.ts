import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexHmpgComponent } from './flex-hmpg.component';

describe('FlexHmpgComponent', () => {
  let component: FlexHmpgComponent;
  let fixture: ComponentFixture<FlexHmpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexHmpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexHmpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
