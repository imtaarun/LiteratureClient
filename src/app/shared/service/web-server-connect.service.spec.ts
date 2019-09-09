import { TestBed } from '@angular/core/testing';

import { WebServerConnectService } from './web-server-connect.service';

describe('WebServerConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServerConnectService = TestBed.get(WebServerConnectService);
    expect(service).toBeTruthy();
  });
});
