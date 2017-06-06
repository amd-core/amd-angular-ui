import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElementHelpers } from '../../test/helpers';
import { AmdDialogComponent } from './amd-dialog.component';

describe('Component: amd-dialog', () => {
  let component: AmdDialogComponent;
  let fixture: ComponentFixture<AmdDialogComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmdDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdDialogComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    fixture.detectChanges();
  });

  describe('controller', () => {
    describe('constructor()', () => {
      it('should default isOpen to true', () => {
        expect(component.isOpen).toBe(true);
      });
    });

    describe('closeModal()', () => {
      it('should set isOpen to false', () => {
        expect(component.isOpen).toBe(true);

        component.closeModal();
        fixture.detectChanges();

        expect(component.isOpen).toBe(false);
      });
    });
  });

  describe('template', () => {
    let amdModalElem: DebugElement;
    let backdropElem: DebugElement;

    beforeEach(() => {
      amdModalElem = debugElement.query(By.css('.amd-modal'));
      backdropElem = debugElement.query(By.css('.amd-modal-backdrop'));
    });

    it('should have the is-open class when isOpen is true', () => {
      expect(component.isOpen).toBe(true);

      expect(amdModalElem.classes['is-open']).toBe(true);
    });

    it('should not have the is-open class when isOpen is false', () => {
      expect(component.isOpen).toBe(true);

      component.closeModal();
      fixture.detectChanges();
      expect(component.isOpen).toBe(false);
  
      expect(amdModalElem.classes['is-open']).toBe(false);
    });

    it('should close the modal when the backdrop is clicked', () => {
      let closeModalSpy: jasmine.Spy = spyOn(component, 'closeModal');

      ElementHelpers.Click(backdropElem.nativeElement);

      expect(closeModalSpy).toHaveBeenCalled();
    });
  });
});
