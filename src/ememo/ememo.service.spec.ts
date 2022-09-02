import { Test, TestingModule } from '@nestjs/testing';
import { EmemoService } from './ememo.service';

describe('EmemoService', () => {
  let service: EmemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmemoService],
    }).compile();

    service = module.get<EmemoService>(EmemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
