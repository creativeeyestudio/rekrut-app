import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsProfilePage } from './skills-profile.page';

describe('SkillsProfilePage', () => {
  let component: SkillsProfilePage;
  let fixture: ComponentFixture<SkillsProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
