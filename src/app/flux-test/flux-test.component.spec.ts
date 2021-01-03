import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxTestComponent } from './flux-test.component';

describe('FluxTestComponent', () => {
  let component: FluxTestComponent;
  let fixture: ComponentFixture<FluxTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
