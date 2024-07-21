import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnScssComponent } from './learn-scss.component';

describe('LearnScssComponent', () => {
  let component: LearnScssComponent;
  let fixture: ComponentFixture<LearnScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnScssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
