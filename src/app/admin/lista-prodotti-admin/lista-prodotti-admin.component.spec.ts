import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdottiAdminComponent } from './lista-prodotti-admin.component';

describe('ListaProdottiAdminComponent', () => {
  let component: ListaProdottiAdminComponent;
  let fixture: ComponentFixture<ListaProdottiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdottiAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProdottiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
