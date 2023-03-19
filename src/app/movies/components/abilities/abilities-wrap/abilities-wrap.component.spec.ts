import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesWrapComponent } from './abilities-wrap.component';

describe('AbilitiesWrapComponent', () => {
  let component: AbilitiesWrapComponent;
  let fixture: ComponentFixture<AbilitiesWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiesWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiesWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
