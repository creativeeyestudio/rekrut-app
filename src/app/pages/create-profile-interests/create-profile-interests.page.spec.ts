import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProfileInterestsPage } from './create-profile-interests.page';

describe('CreateProfileInterestsPage', () => {
  let component: CreateProfileInterestsPage;
  let fixture: ComponentFixture<CreateProfileInterestsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileInterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
