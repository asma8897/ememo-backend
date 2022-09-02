import { Test, TestingModule } from '@nestjs/testing';
import { EmemoController } from './ememo.controller';
import { EmemoService } from './ememo.service';

describe('EmemoController', () => {
  let controller: EmemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmemoController],
      providers: [EmemoService],
    }).compile();

    controller = module.get<EmemoController>(EmemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
