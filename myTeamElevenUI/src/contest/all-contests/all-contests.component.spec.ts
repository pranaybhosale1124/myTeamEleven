import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContestsComponent } from './all-contests.component';

describe('AllContestsComponent', () => {
  let component: AllContestsComponent;
  let fixture: ComponentFixture<AllContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
