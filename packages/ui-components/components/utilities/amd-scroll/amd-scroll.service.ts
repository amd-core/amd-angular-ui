import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AmdScrollService {
  public $windowScroll: BehaviorSubject<number> = new BehaviorSubject(0);
}
