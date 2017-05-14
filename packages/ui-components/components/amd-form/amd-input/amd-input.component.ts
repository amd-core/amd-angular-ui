import {
	Component,
	OnInit,
	Input
} from '@angular/core';

export interface IErrorMessage {
	key: string;
	value: string;
}

@Component({
	selector: 'amd-input',
	templateUrl: './amd-input.component.html'
})
export class AmdInputComponent implements OnInit {

	@Input('value') public value: any;
	@Input('type') public type: string;
	@Input('name') public name: string;
	@Input('autofocus') public autofocus: string;
	@Input('disabled') public disabled: string;
	@Input('maxlength') public maxlength: string;
	@Input('minlength') public minlength: string;
	@Input('readonly') public readonly: string;
	@Input('required') public required: string;
	@Input('messages') public messages: Array<IErrorMessage>;

	public isFocused: boolean;

	constructor() {
		this.isFocused = false;
	}

	public ngOnInit(): void {
		// todo: init
	}

	public onFocus(): void {
		this.isFocused = true;
	}

	public onBlur(): void {
		this.isFocused = false;
	}

	public onChange(event: Event): void {
		// todo: handle change event
	}

	public get hasValue(): boolean {
		return this.value &&
			this.value !== undefined &&
			this.value !== '' &&
			this.value.length > 0;
	}
}
