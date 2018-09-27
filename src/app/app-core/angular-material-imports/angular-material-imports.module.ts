import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatGridListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule
          ],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatGridListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule
          ]
})
export class AngularMaterialImportsModule {}
