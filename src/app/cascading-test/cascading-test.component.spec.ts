import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingTestComponent } from './cascading-test.component';

describe('CascadingTestComponent', () => {
  let component: CascadingTestComponent;
  let fixture: ComponentFixture<CascadingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
