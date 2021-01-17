import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAliasComponent } from './area-alias.component';

describe('AreaAliasComponent', () => {
  let component: AreaAliasComponent;
  let fixture: ComponentFixture<AreaAliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
