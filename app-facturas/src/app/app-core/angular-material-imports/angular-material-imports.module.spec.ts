import { AngularMaterialImportsModule } from './angular-material-imports.module';

describe('AngularMaterialImportsModule', () => {
  let angularMaterialImportsModule: AngularMaterialImportsModule;

  beforeEach(() => {
    angularMaterialImportsModule = new AngularMaterialImportsModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialImportsModule).toBeTruthy();
  });
});
