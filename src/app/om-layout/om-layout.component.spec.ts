import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmLayoutComponent } from './om-layout.component';

describe('OmLayoutComponent', () => {
  let component: OmLayoutComponent;
  let fixture: ComponentFixture<OmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
