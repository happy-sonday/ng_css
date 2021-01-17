import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHmpgComponent } from './grid-hmpg.component';

describe('GridHmpgComponent', () => {
  let component: GridHmpgComponent;
  let fixture: ComponentFixture<GridHmpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHmpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHmpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
