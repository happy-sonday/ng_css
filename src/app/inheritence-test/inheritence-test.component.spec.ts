import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritenceTestComponent } from './inheritence-test.component';

describe('InheritenceTestComponent', () => {
  let component: InheritenceTestComponent;
  let fixture: ComponentFixture<InheritenceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritenceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritenceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
