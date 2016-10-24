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
var amd_sidenav_service_1 = require('./amd-sidenav.service');
var AmdSidenavComponent = (function () {
    function AmdSidenavComponent(amdSidenavService) {
        var _this = this;
        this.amdSidenavService = amdSidenavService;
        this.isOpen = false;
        this.amdSidenavService.sidenavToggled.subscribe(function (sidenavId) {
            if (sidenavId === _this.sidenavId) {
                _this.toggleSidenav();
            }
        });
        this.amdSidenavService.sidenavOpened.subscribe(function (sidenavId) {
            if (sidenavId === _this.sidenavId) {
                _this.openSidenav();
            }
        });
        this.amdSidenavService.sidenavClosed.subscribe(function (sidenavId) {
            if (sidenavId === _this.sidenavId) {
                _this.closeSidenav();
            }
        });
    }
    AmdSidenavComponent.prototype.toggleSidenav = function () {
        this.isOpen = !this.isOpen;
    };
    AmdSidenavComponent.prototype.openSidenav = function () {
        this.isOpen = true;
    };
    AmdSidenavComponent.prototype.closeSidenav = function () {
        this.isOpen = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AmdSidenavComponent.prototype, "sidenavId", void 0);
    AmdSidenavComponent = __decorate([
        core_1.Component({
            selector: 'amd-sidenav',
            template: require('./amd-sidenav.component.html'),
            styles: [require('./amd-sidenav.component.scss')]
        }), 
        __metadata('design:paramtypes', [amd_sidenav_service_1.AmdSidenavService])
    ], AmdSidenavComponent);
    return AmdSidenavComponent;
}());
exports.AmdSidenavComponent = AmdSidenavComponent;

//# sourceMappingURL=amd-sidenav.component.js.map
