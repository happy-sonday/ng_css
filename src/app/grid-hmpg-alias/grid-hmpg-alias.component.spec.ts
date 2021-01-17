import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHmpgAliasComponent } from './grid-hmpg-alias.component';

describe('GridHmpgAliasComponent', () => {
  let component: GridHmpgAliasComponent;
  let fixture: ComponentFixture<GridHmpgAliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHmpgAliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHmpgAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
