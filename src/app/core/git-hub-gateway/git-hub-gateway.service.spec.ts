import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GitHubGatewayService } from './git-hub-gateway.service';

describe('GitHubGatewayService', () => {
  let service: GitHubGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GitHubGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use GitHubGatewayService', () => {
    expect(service.getHub()).toBe('Hub');
  });
});
