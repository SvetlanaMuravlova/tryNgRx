import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConditionComponent } from './item-condition.component';

describe('ItemConditionComponent', () => {
  let component: ItemConditionComponent;
  let fixture: ComponentFixture<ItemConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
