import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGroupComponent } from './forms-group.component';

describe('FormsGroupComponent', () => {
  let component: FormsGroupComponent;
  let fixture: ComponentFixture<FormsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
