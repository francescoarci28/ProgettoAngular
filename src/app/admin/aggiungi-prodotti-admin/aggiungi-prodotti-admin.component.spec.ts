import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiProdottiAdminComponent } from './aggiungi-prodotti-admin.component';

describe('AggiungiProdottiAdminComponent', () => {
  let component: AggiungiProdottiAdminComponent;
  let fixture: ComponentFixture<AggiungiProdottiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiProdottiAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiProdottiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
