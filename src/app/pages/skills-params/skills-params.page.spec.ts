import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsParamsPage } from './skills-params.page';

describe('SkillsParamsPage', () => {
  let component: SkillsParamsPage;
  let fixture: ComponentFixture<SkillsParamsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsParamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
