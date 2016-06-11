import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebPrimengAppComponent } from '../app/web-primeng.component';

beforeEachProviders(() => [WebPrimengAppComponent]);

describe('App: WebPrimeng', () => {
  it('should create the app',
      inject([WebPrimengAppComponent], (app: WebPrimengAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'web-primeng works!\'',
      inject([WebPrimengAppComponent], (app: WebPrimengAppComponent) => {
    expect(app.title).toEqual('web-primeng works!');
  }));
});
