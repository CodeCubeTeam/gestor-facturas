import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatGridListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule
          ],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatGridListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule
          ]
})
export class AngularMaterialImportsModule {}
