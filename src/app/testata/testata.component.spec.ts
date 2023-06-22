import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestataComponent } from './testata.component';

describe('TestataComponent', () => {
  let component: TestataComponent;
  let fixture: ComponentFixture<TestataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
