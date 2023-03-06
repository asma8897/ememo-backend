import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmemoService } from './ememo.service';
import { CreateEmemoDto } from './dto/create-ememo.dto';
import { UpdateEmemoDto } from './dto/update-ememo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateMemoTypeDto } from './dto/create-memo-type.dto';
import { UpdateMemoTypeDto } from './dto/update-memo-type.dto';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';
import { CreateMemoApprovalDto } from './dto/create-memo-approval.dto';
import { UpdateMemoApprovalDto } from './dto/update-memo-approval.dto';
import { CreateMemoAttachmentDto } from './dto/create-memo-attachment.dto';
import { UpdateMemoAttachmentDto } from './dto/update-memo-attachment.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group-dto';
import { CreateMemoCCUserDto } from './dto/create-memo-cc-user.dto';
import { UpdateMemoCCUserDto } from './dto/update-memo-cc-user.dto';
import { CreateMemoCommentDto } from './dto/create-memo-comment.dto';
import { UpdateMemoCommentDto } from './dto/update-memo-comment.dto';
import { CreateMemoStatusDto } from './dto/create-memo-status.dto';
import { UpdateMemoStatusDto } from './dto/update-memo-status.dto';

@Controller('ememo')
export class EmemoController {
  constructor(private readonly ememoService: EmemoService) {}

  @Post('/createUser')
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.ememoService.createUser(CreateUserDto);
  }

  @Get('/findAllUser')
  findAllUser() {
    return this.ememoService.findAllUser();
  }

  @Get('/findOneUser/:id')
  findOneUser(@Param('id') id: string) {
    return this.ememoService.findOneUser({ id: +id });
  }

  @Patch('/updateUser/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.ememoService.updateUser({ id: +id }, updateUserDto);
  }

  @Delete('removeUser/:id')
  removeUser(@Param('id') id: string) {
    return this.ememoService.removeUser({ id: +id });
  }

  @Post('/createDepartment')
  createDepartment(@Body() CreateDepartmentDto: CreateDepartmentDto) {
    return this.ememoService.createDepartment(CreateDepartmentDto);
  }

  @Get('/findAllDepartment')
  findAllDepartment() {
    return this.ememoService.findAllDepartment();
  }

  @Get('/findOneDepartment/:id')
  findOneDepartment(@Param('id') id: string) {
    return this.ememoService.findOneDepartment({ id: +id });
  }

  @Patch('/updateDepartment/:id')
  updateDepartment(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.ememoService.updateDepartment({ id: +id }, updateDepartmentDto);
  }

  @Delete('/removeDepartment/:id')
  removeDepartment(@Param('id') id: string) {
    return this.ememoService.removeDepartment({ id: +id });
  }

  @Post('/createCompany')
  createCompany(@Body() CreateCompanyDto: CreateCompanyDto) {
    return this.ememoService.createCompany(CreateCompanyDto);
  }

  @Get('/findAllCompany')
  findAllCompany() {
    return this.ememoService.findAllCompany();
  }

  @Get('/findOneCompany/:id')
  findOneCompany(@Param('id') id: string) {
    return this.ememoService.findOneCompany({ id: +id });
  }

  @Patch('/updateCompany/:id')
  updateCompany(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.ememoService.updateCompany({ id: +id }, updateCompanyDto);
  }

  @Delete('/removeCompany/:id')
  removeCompany(@Param('id') id: string) {
    return this.ememoService.removeCompany({ id: +id });
  }

  @Post('/createProject')
  createProject(@Body() CreateProjectDto: CreateProjectDto) {
    return this.ememoService.createProject(CreateProjectDto);
  }

  @Get('/findAllProject')
  findAllProject() {
    return this.ememoService.findAllProject();
  }

  @Get('/findOneProject/:id')
  findOneProject(@Param('id') id: string) {
    return this.ememoService.findOneProject({ id: +id });
  }

  @Patch('/updateProject/:id')
  updateProject(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.ememoService.updateProject({ id: +id }, updateProjectDto);
  }

  @Delete('/removeProject/:id')
  removeProject(@Param('id') id: string) {
    return this.ememoService.removeProject({ id: +id });
  }

  @Post('/createMemoType')
  createMemoType(@Body() CreateMemoTypeDto: CreateMemoTypeDto) {
    return this.ememoService.createMemoType(CreateMemoTypeDto);
  }

  @Get('/findAllMemoType')
  findAllMemoType() {
    return this.ememoService.findAllMemoType();
  }

  @Get('/findOneMemoType/:id')
  findOneMemoType(@Param('id') id: string) {
    return this.ememoService.findOneMemoType({ id: +id });
  }

  @Patch('/updateMemoType/:id')
  updateMemoType(@Param('id') id: string, @Body() updateMemoTypeDto: UpdateMemoTypeDto) {
    return this.ememoService.updateMemoType({ id: +id }, updateMemoTypeDto);
  }

  @Delete('/removeMemoType/:id')
  removeMemoType(@Param('id') id: string) {
    return this.ememoService.removeMemoType({ id: +id });
  }

  @Post('/createMemo')
  createMemo(@Body() CreateMemoDto: CreateMemoDto) {
    return this.ememoService.createMemo(CreateMemoDto);
  }

  @Get('/findAllMemo')
  findAllMemo() {
    return this.ememoService.findAllMemo();
  }

  @Get('/findOneMemo/:id')
  findOneMemo(@Param('id') id: string) {
    return this.ememoService.findOneMemo({ id: +id });
  }

  @Patch('/updateMemo/:id')
  updateMemo(@Param('id') id: string, @Body() updateMemoDto: UpdateMemoDto) {
    // return this.ememoService.updateMemo({ id: +id }, updateMemoDto);
  }

  @Delete('/removeMemo/:id')
  removeMemo(@Param('id') id: string) {
    return this.ememoService.removeMemo({ id: +id });
  }

  @Post('/createMemoApproval')
  createMemoApproval(@Body() CreateMemoApprovalDto: CreateMemoApprovalDto) {
    return this.ememoService.createMemoApproval(CreateMemoApprovalDto);
  }

  @Get('/findAllMemoApproval')
  findAllMemoApproval() {
    return this.ememoService.findAllMemoApproval();
  }

  @Get('/findOneMemoApproval/:id')
  findOneMemoApproval(@Param('id') id: string) {
    return this.ememoService.findOneMemoApproval({ id: +id });
  }

  @Patch('/updateMemoApproval/:id')
  updateMemoApproval(@Param('id') id: string, @Body() updateMemoApprovalDto: UpdateMemoApprovalDto) {
    return this.ememoService.updateMemoApproval({ id: +id }, updateMemoApprovalDto);
  }

  @Delete('/removeMemoApproval/:id')
  removeMemoApproval(@Param('id') id: string) {
    return this.ememoService.removeMemoApproval({ id: +id });
  }

  @Post('/createMemoAttachment')
  createMemoAttachment(@Body() CreateMemoAttachmentDto: CreateMemoAttachmentDto) {
    return this.ememoService.createMemoAttachment(CreateMemoAttachmentDto);
  }

  @Get('/findAllMemoAttachment')
  findAllMemoAttachment() {
    return this.ememoService.findAllMemoAttachment();
  }

  @Get('/findAllMemoAttachment/:id')
  findOneMemoAttachment(@Param('id') id: string) {
    return this.ememoService.findOneMemoAttachment({ id: +id });
  }

  @Patch('/updateMemoAttachment/:id')
  updateMemoAttachment(@Param('id') id: string, @Body() updateMemoAttachmentDto: UpdateMemoAttachmentDto) {
    return this.ememoService.updateMemoAttachment({ id: +id }, updateMemoAttachmentDto);
  }

  @Delete('/removeMemoAttachment/:id')
  removeMemoAttachment(@Param('id') id: string) {
    return this.ememoService.removeMemoAttachment({ id: +id });
  }

  @Post('/createGroup')
  createGroup(@Body() CreateGroupDto: CreateGroupDto) {
    return this.ememoService.createGroup(CreateGroupDto);
  }

  @Get('/findAllGroup')
  findAllGroup() {
    return this.ememoService.findAllGroup();
  }

  @Get('/findOneGroup/:id')
  findOneGroup(@Param('id') id: string) {
    return this.ememoService.findOneGroup({ id: +id });
  }

  @Patch('/updateGroup/:id')
  updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.ememoService.updateGroup({ id: +id }, updateGroupDto);
  }

  @Delete('/removeGroup/:id')
  removeGroup(@Param('id') id: string) {
    return this.ememoService.removeGroup({ id: +id });
  }

  @Post('/createMemoCcUser')
  createMemoCcUser(@Body() CreateMemoCCUserDto: CreateMemoCCUserDto) {
    return this.ememoService.createMemoCcUser(CreateMemoCCUserDto);
  }

  @Get('/findAllMemoCcUser')
  findAllMemoCcUser() {
    return this.ememoService.findAllMemoCcUser();
  }

  @Get('/findOneMemoCcUser/:id')
  findOneMemoCcUser(@Param('id') id: string) {
    return this.ememoService.findOneMemoCcUser({ id: +id });
  }

  @Patch('/updateMemoCcUser/:id')
  updateMemoCcUser(@Param('id') id: string, @Body() updateMemoCCUserDto: UpdateMemoCCUserDto) {
    // return this.ememoService.updateMemoCcUser({ id: +id }, updateMemoCCUserDto);
  }

  @Delete('/removeMemoCcUser/:id')
  removeMemoCcUser(@Param('id') id: string) {
    return this.ememoService.removeMemoCcUser({ id: +id });
  }
  
  @Post('/createMemoComment')
  createMemoComment(@Body() CreateMemoCommentDto: CreateMemoCommentDto) {
    return this.ememoService.createMemoComment(CreateMemoCommentDto);
  }

  @Get('/findAllMemoComment')
  findAllMemoComment() {
    return this.ememoService.findAllMemoComment();
  }

  @Get('/findOneMemoComment/:id')
  findOneMemoComment(@Param('id') id: string) {
    return this.ememoService.findOneMemoComment({ id: +id });
  }

  @Patch('/updateMemoComment/:id')
  updateMemoComment(@Param('id') id: string, @Body() updateMemoCommentDto: UpdateMemoCommentDto) {
    return this.ememoService.updateMemoComment({ id: +id }, updateMemoCommentDto);
  }

  @Delete('/removeMemoComment/:id')
  removeMemoComment(@Param('id') id: string) {
    return this.ememoService.removeMemoComment({ id: +id });
  }

  @Post('/createMemoStatus')
  createMemoStatus(@Body() CreateMemoStatusDto: CreateMemoStatusDto) {
    return this.ememoService.createMemoStatus(CreateMemoStatusDto);
  }

  @Get('/findAllMemoStatus')
  findAllMemoStatus() {
    return this.ememoService.findAllMemoStatus();
  }

  @Get('/findOneMemoStatus/:id')
  findOneMemoStatus(@Param('id') id: string) {
    return this.ememoService.findOneMemoStatus({ id: +id });
  }

  @Patch('/updateMemoStatus/:id')
  updateMemoStatus(@Param('id') id: string, @Body() updateMemoStatusDto: UpdateMemoStatusDto) {
    return this.ememoService.updateMemoStatus({ id: +id }, updateMemoStatusDto);
  }

  @Delete('/removeMemoStatus/:id')
  removeMemoStatus(@Param('id') id: string) {
    return this.ememoService.removeMemoStatus({ id: +id });
  }




  // @Post()
  // create(@Body() createEmemoDto: CreateEmemoDto) {
  //   return this.ememoService.create(createEmemoDto);
  // }

  // @Get()
  // findAll() {
  //   return this.ememoService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ememoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmemoDto: UpdateEmemoDto) {
  //   return this.ememoService.update(+id, updateEmemoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ememoService.remove(+id);
  // }
}
