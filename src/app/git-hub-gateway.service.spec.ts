import { TestBed } from '@angular/core/testing';

import { GitHubGatewayService } from './git-hub-gateway.service';

describe('GitHubGatewayService', () => {
  let service: GitHubGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
