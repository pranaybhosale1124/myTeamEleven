import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestPlayersComponent } from './contest-players.component';

describe('ContestPlayersComponent', () => {
  let component: ContestPlayersComponent;
  let fixture: ComponentFixture<ContestPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
