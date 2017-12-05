import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMessagesComponent } from './recipe-messages.component';

describe('RecipeMessagesComponent', () => {
  let component: RecipeMessagesComponent;
  let fixture: ComponentFixture<RecipeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
