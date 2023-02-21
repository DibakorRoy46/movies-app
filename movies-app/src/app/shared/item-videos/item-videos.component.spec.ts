import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVideosComponent } from './item-videos.component';

describe('ItemVideosComponent', () => {
  let component: ItemVideosComponent;
  let fixture: ComponentFixture<ItemVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
