import { EmailParams } from './emailParams';
export class Email {
    service_id: string;
    template_id: string;
    user_id: string;
    template_params: EmailParams;

    constructor( service_id: string, template_id: string, user_id: string, template_params: EmailParams ) {
        this.service_id = service_id;
        this.template_id = template_id;
        this.user_id = user_id;
        this.template_params = template_params;
    }
}
