export interface CreateCheckRequestDto {
    name: string,
    subject: string,
    greeting: string,
    templateUid: string,
    transmissionType: string,
    recipients: CheckRecipientDto[]
}

export interface CheckRecipientDto {
    firstName: string,
    lastName: string,
    salutation: 'MR' | 'MRS',
    email: string,
    mobilePhone?: string
}