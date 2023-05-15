export interface createTemplateRequestDto {
    templateName: string,
    components: TemplateComponent[]
}

export interface TemplateComponent {
    name: string,
    type: string,
    required?: boolean,
    description: string,
    hint: string;
}