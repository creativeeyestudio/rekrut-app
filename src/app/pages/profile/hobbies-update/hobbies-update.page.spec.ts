import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HobbiesUpdatePage } from './hobbies-update.page';

describe('HobbiesUpdatePage', () => {
  let component: HobbiesUpdatePage;
  let fixture: ComponentFixture<HobbiesUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
