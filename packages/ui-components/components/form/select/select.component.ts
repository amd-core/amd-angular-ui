import {
  Component, ChangeDetectionStrategy,
  Renderer2, OnInit, ElementRef,
  HostListener, ViewChild,
  QueryList, Input, ChangeDetectorRef,
  AfterContentInit, ContentChildren
} from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';

import { AmdDropdownComponent } from '../dropdown/dropdown.component';
import { AmdInputContainerComponent } from '../input-container/input-container.component';
import { AmdOptionComponent } from '../option/option.component';

@Component({
  selector: 'amd-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdSelectComponent implements OnInit, AfterContentInit {
  @Input() public placeholder: string = '';

  public isContentActive: boolean = false;

  public value: string = '';

  @ViewChild(AmdDropdownComponent) private dropdown: AmdDropdownComponent;
  @ViewChild(AmdInputContainerComponent) private inputContainer: AmdInputContainerComponent;
  @ContentChildren(AmdOptionComponent) private options: QueryList<AmdOptionComponent>;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '0');
    this.value = this.placeholder;
  }

  public ngAfterContentInit(): void {
    this.options.forEach((option: AmdOptionComponent) => {
      option.optionClick.subscribe(() => {
        this.value = option.value;
        this.dropdown.close();
        this.changeDetectorRef.markForCheck();
      });
    });
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
