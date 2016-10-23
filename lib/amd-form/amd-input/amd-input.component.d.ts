import { OnInit } from '@angular/core';
export interface IErrorMessage {
    key: string;
    value: string;
}
export declare class AmdInputComponent implements OnInit {
    value: any;
    type: string;
    name: string;
    autofocus: string;
    disabled: string;
    maxlength: string;
    minlength: string;
    readonly: string;
    required: string;
    messages: Array<IErrorMessage>;
    isFocused: boolean;
    constructor();
    ngOnInit(): void;
    onFocus(): void;
    onBlur(): void;
    onChange(event: Event): void;
    readonly hasValue: boolean;
}
