import { DebugElement } from '@angular/core';

export interface IButtonClickEvent {
  button: number;
}

export interface IButtonClickEvents {
  left: IButtonClickEvent;
  right: IButtonClickEvent;
}

export const ButtonClickEvents: IButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 }
};

export class ElementHelpers {
  public static Click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
    if (el instanceof HTMLElement) {
      el.click();
    } else {
      el.triggerEventHandler('click', eventObj);
    }
  }
}
