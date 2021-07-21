import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFavComponent } from './general.component';

describe('GeneralComponent', () => {
  let component: GeneralFavComponent;
  let fixture: ComponentFixture<GeneralFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
