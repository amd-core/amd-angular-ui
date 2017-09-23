import {
  Component, ChangeDetectionStrategy,
  Output, EventEmitter, ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'amd-option',
  templateUrl: './option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdOptionComponent {
  @Output() public optionClick: EventEmitter<{}> = new EventEmitter();

  @Input() public value: string;

  public get content(): string {
    return (this.nativeElement.textContent || '').trim(); // [TODO] - remove direct DOM acces
  }

  private get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) { }

  public onClick(): void {
    this.optionClick.emit();
  }
}
