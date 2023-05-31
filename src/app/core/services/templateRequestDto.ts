export interface createTemplateRequestDto {
  name: string;
  components: TemplateComponent[];
}

export interface TemplateComponent {
  name: string;
  type: string;
  required?: boolean;
  description: string;
  hint: string;
  min?: number;
  max?: number;
  multiLine?: boolean;
  length?: number;
  fieldType: string;
  value?: any;
  options?: string;
  minOptions?: number;
  maxOptions?: number;
}
