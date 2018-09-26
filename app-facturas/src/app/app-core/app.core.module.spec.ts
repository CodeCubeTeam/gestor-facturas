import { App.CoreModule } from './app.core.module';

describe('App.CoreModule', () => {
  let appCoreModule: App.CoreModule;

  beforeEach(() => {
    appCoreModule = new App.CoreModule();
  });

  it('should create an instance', () => {
    expect(appCoreModule).toBeTruthy();
  });
});
