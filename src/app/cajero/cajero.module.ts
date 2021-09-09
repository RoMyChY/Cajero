import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CajeroComponent } from "./cajero.component";
import { DisplayComponent } from "./display/display.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        CajeroComponent,
        DisplayComponent
    ],
    exports: [
    ]
})
export class CajeroModule {}
