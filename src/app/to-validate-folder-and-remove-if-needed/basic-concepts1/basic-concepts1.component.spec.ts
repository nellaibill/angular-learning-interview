import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConcepts1Component } from './basic-concepts1.component';

describe('BasicConcepts1Component', () => {
  let component: BasicConcepts1Component;
  let fixture: ComponentFixture<BasicConcepts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicConcepts1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicConcepts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
