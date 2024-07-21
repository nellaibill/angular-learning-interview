import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConcepts2Component } from './basic-concepts2.component';

describe('BasicConcepts2Component', () => {
  let component: BasicConcepts2Component;
  let fixture: ComponentFixture<BasicConcepts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicConcepts2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicConcepts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
