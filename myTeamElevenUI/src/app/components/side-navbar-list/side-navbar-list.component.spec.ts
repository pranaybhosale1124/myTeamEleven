import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarListComponent } from './side-navbar-list.component';

describe('SideNavbarListComponent', () => {
  let component: SideNavbarListComponent;
  let fixture: ComponentFixture<SideNavbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavbarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
