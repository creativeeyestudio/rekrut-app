import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsDescPage } from './skills-desc.page';

describe('SkillsDescPage', () => {
  let component: SkillsDescPage;
  let fixture: ComponentFixture<SkillsDescPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
