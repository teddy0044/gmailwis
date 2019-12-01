import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsmailComponent } from './corpsmail.component';

describe('CorpsmailComponent', () => {
  let component: CorpsmailComponent;
  let fixture: ComponentFixture<CorpsmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpsmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
