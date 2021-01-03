import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsizingTestComponent } from './boxsizing-test.component';

describe('BoxsizingTestComponent', () => {
  let component: BoxsizingTestComponent;
  let fixture: ComponentFixture<BoxsizingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxsizingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsizingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
