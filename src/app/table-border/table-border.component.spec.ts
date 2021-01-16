import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBorderComponent } from './table-border.component';

describe('TableBorderComponent', () => {
  let component: TableBorderComponent;
  let fixture: ComponentFixture<TableBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
