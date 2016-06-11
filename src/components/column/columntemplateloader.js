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
var ColumnTemplateLoader = (function () {
    function ColumnTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.template, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnTemplateLoader.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnTemplateLoader.prototype, "rowData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ColumnTemplateLoader.prototype, "rowIndex", void 0);
    ColumnTemplateLoader = __decorate([
        core_1.Component({
            selector: 'p-columnTemplateLoader',
            template: ""
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], ColumnTemplateLoader);
    return ColumnTemplateLoader;
    var _a;
}());
exports.ColumnTemplateLoader = ColumnTemplateLoader;
//# sourceMappingURL=columntemplateloader.js.map