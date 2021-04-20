import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatListModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTooltipModule
}
  from '@angular/material';
import { MatIconModule } from "@angular/material/icon"


@NgModule({
    declarations:[],
    imports:[
        MatCardModule,
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatStepperModule,
        MatExpansionModule,],
    exports:[
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatStepperModule,
        MatExpansionModule,],
    providers:[]
})

export class AngularMaterialModule {}