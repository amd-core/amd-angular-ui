"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AmdInputComponentTemplate = require('./amd-input.component.html');
var AmdInputComponent = (function () {
    function AmdInputComponent() {
        this.isFocused = false;
    }
    AmdInputComponent.prototype.ngOnInit = function () {
    };
    AmdInputComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    AmdInputComponent.prototype.onBlur = function () {
        this.isFocused = false;
    };
    AmdInputComponent.prototype.onChange = function (event) {
    };
    Object.defineProperty(AmdInputComponent.prototype, "hasValue", {
        get: function () {
            return this.value &&
                this.value !== undefined &&
                this.value !== '' &&
                this.value.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('value'), 
        __metadata('design:type', Object)
    ], AmdInputComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input('name'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input('autofocus'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "autofocus", void 0);
    __decorate([
        core_1.Input('disabled'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input('maxlength'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input('minlength'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "minlength", void 0);
    __decorate([
        core_1.Input('readonly'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input('required'), 
        __metadata('design:type', String)
    ], AmdInputComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input('messages'), 
        __metadata('design:type', Array)
    ], AmdInputComponent.prototype, "messages", void 0);
    AmdInputComponent = __decorate([
        core_1.Component({
            selector: 'amd-input',
            template: AmdInputComponentTemplate,
            styles: [require('./amd-input.component.scss')]
        }), 
        __metadata('design:paramtypes', [])
    ], AmdInputComponent);
    return AmdInputComponent;
}());
exports.AmdInputComponent = AmdInputComponent;

//# sourceMappingURL=amd-input.component.js.map
