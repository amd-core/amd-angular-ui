import {
  Component, ChangeDetectionStrategy,
  Renderer2, OnInit, ElementRef,
  HostListener, ViewChild,
  QueryList, Input, ChangeDetectorRef,
  AfterContentInit, ContentChildren,
  forwardRef
} from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AmdDropdownComponent } from '../dropdown/dropdown.component';
import { AmdInputContainerComponent } from '../input-container/input-container.component';
import { AmdOptionComponent } from '../option/option.component';

// tslint:disable
@Component({
  selector: 'amd-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ // [TODO] - further investigate how @angular/material handles this
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmdSelectComponent),
      multi: true,
    }
  ]
})
// tslint:enable
export class AmdSelectComponent implements OnInit, AfterContentInit, ControlValueAccessor {
  @Input() public placeholder: string = '';

  public isContentActive: boolean = false;

  public value: string = '';
  public content: string = '';

  @ViewChild(AmdDropdownComponent) private dropdown: AmdDropdownComponent;
  @ViewChild(AmdInputContainerComponent) private inputContainer: AmdInputContainerComponent;
  @ContentChildren(AmdOptionComponent) private options: QueryList<AmdOptionComponent>;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public propagateChange = (value: string) => {
    // do nothing
  }

  public ngOnInit(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '0');
    this.content = this.placeholder;
  }

  public ngAfterContentInit(): void {
    this.options.forEach((option: AmdOptionComponent) => {
      option.optionClick.subscribe(() => {
        this.value = option.value;
        this.content = option.content;
        this.dropdown.close();
        this.changeDetectorRef.markForCheck();
        this.propagateChange(this.value);
      });
    });
  }

  public writeValue(value: string): void {
    if (!value) { return; }

    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
    // todo
  }

  @HostListener('focus')
  public onFocus(): void {
    this.inputContainer.focus();
  }

  @HostListener('blur')
  public onBlur(): void {
    this.inputContainer.blur();
    this.dropdown.close();
  }

  @HostListener('keydown', ['$event'])
  public onClick(event: KeyboardEvent): void {
    if (event.keyCode === ENTER) {
      this.dropdown.toggle();
    }
  }  

  public onTriggerClicked(): void {
    this.isContentActive = true;
  }
}
