import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSignup } from './owner-signup';

describe('OwnerSignup', () => {
  let component: OwnerSignup;
  let fixture: ComponentFixture<OwnerSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
