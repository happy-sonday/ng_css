import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDfnComponent } from './auto-dfn.component';

describe('AutoDfnComponent', () => {
  let component: AutoDfnComponent;
  let fixture: ComponentFixture<AutoDfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoDfnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
