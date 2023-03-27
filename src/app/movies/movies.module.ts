import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxPrintModule } from 'ngx-print';

import { AbilitiesComponent } from './components/abilities/abilities.component';
import { AbilityItemComponent } from './components/ability-item/ability-item.component';
import { CardComponent } from './components/card/card.component';
import { ClassesComponent } from './components/classes/classes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { AbilityPipe } from './components/pipes/ability.pipe';
import { BonusPipe } from './components/pipes/bonus.pipe';
import { CheckedPipe } from './components/pipes/checked.pipe';
import { ValuePipe } from './components/pipes/value.pipe';
import { RaceComponent } from './components/race/race.component';
import { StaffComponent } from './components/staff/staff.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    CdkAccordionModule,
    NgxPrintModule,
  ],
  declarations: [
    CatalogComponent,
    CardComponent,
    ModalComponent,
    HeaderComponent,
    RaceComponent,
    FooterComponent,
    AbilitiesComponent,
    StaffComponent,
    ParametersComponent,
    BonusPipe,
    ValuePipe,
    CheckedPipe,
    AbilityPipe,
    ClassesComponent,
    AbilityItemComponent,
  ],
})
export class MoviesModule {}
