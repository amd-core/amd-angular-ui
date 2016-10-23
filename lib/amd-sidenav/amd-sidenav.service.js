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
var Subject_1 = require('rxjs/Subject');
var AmdSidenavService = (function () {
    function AmdSidenavService() {
        this.sidenavToggledSource = new Subject_1.Subject();
        this.sidenavOpenedSource = new Subject_1.Subject();
        this.sidenavClosedSource = new Subject_1.Subject();
        this.sidenavToggled = this.sidenavToggledSource.asObservable();
        this.sidenavOpened = this.sidenavOpenedSource.asObservable();
        this.sidenavClosed = this.sidenavClosedSource.asObservable();
    }
    AmdSidenavService.prototype.toggle = function (sidenavId) {
        this.sidenavToggledSource.next(sidenavId);
    };
    AmdSidenavService.prototype.open = function (sidenavId) {
        this.sidenavOpenedSource.next(sidenavId);
    };
    AmdSidenavService.prototype.close = function (sidenavId) {
        this.sidenavClosedSource.next(sidenavId);
    };
    AmdSidenavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AmdSidenavService);
    return AmdSidenavService;
}());
exports.AmdSidenavService = AmdSidenavService;

//# sourceMappingURL=amd-sidenav.service.js.map
