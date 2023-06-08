import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromptComponent } from './add-prompt.component';

describe('AddPromptComponent', () => {
  let component: AddPromptComponent;
  let fixture: ComponentFixture<AddPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPromptComponent]
    });
    fixture = TestBed.createComponent(AddPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
