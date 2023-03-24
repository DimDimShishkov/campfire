import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityItemComponent } from './ability-item.component';

describe('AbilityItemComponent', () => {
  let component: AbilityItemComponent;
  let fixture: ComponentFixture<AbilityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
