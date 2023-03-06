export class CreateUserDto {
    uid: string;
    name: string;
    jobTitle: string;
    email: string;
    password: string;
    departmentId: number;
    companyId: number;
    createdOn: Date;
    updatedOn: Date;
    createdById: number;
    updatedById: number;
    deletedById: number;
    deletedOn: Date;
    status: "ACTIVE" | "DELETED";
    groupId: number[];
}