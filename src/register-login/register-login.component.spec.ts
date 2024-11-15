import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoginComponent } from './register-login.component';

describe('RegisterLoginComponent', () => {
  let component: RegisterLoginComponent;
  let fixture: ComponentFixture<RegisterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
