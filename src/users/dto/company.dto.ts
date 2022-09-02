export class CompanyDto {
    name: string;
    createdOn: Date;
    updatedOn: String;
    status: "ACTIVE";
    createdById: number;
    updatedById: number;
    deletedById: number;
    deletedOn: number;
    users: {
        name: string;
        departmentId: string;
        jobTitle: string;
        companyId: number;
        createdOn: Date;
        updatedOn: Date;
        createdById: number;
        updatedById: number;
        deletedById: number;
        deletedOn: Date;
        status: "ACTIVE" | "DELETED";
    }[];
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
