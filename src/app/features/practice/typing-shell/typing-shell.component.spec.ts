import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingShellComponent } from './typing-shell.component';

describe('TypingShellComponent', () => {
  let component: TypingShellComponent;
  let fixture: ComponentFixture<TypingShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
