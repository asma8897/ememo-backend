import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoAttachmentDto } from './create-memo-attachment.dto';

export class UpdateMemoAttachmentDto extends PartialType(CreateMemoAttachmentDto) {}