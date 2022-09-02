export class ProjectTypeDto {
    name: string;
    createdOn: Date;
    updatedOn: Date;
    createdById: number;
    updatedById: number;
    deletedById: number;
    deletedOn: number;
    status: "ACTIVE"
    memo: {
        addressTo: string;
        from: string;
        departmentId: number;
        companyId: number;
        projectId: number;
        memoTypeId: number;
        createdOn: Date;
        updatedOn: Date;
        submittedOn: Date;
        userId: number;
        status: "ACTIVE";
        subject: string;
        content: string;
        executiveChairman: boolean;
    }[];
}