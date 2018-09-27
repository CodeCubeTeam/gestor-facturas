import { SharedGlobalModule } from './shared-global.module';

describe('SharedGlobalModule', () => {
  let sharedGlobalModule: SharedGlobalModule;

  beforeEach(() => {
    sharedGlobalModule = new SharedGlobalModule();
  });

  it('should create an instance', () => {
    expect(sharedGlobalModule).toBeTruthy();
  });
});
