import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[amdDropdownMenuItem]'
})
export class AmdDropdownMenuItemDirective {
  @HostBinding() public class: string = 'amd-dropdown__menu-item';
}
