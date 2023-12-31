import { Template } from '../abstracts/Interface';
import FetchClient from './FetchClient';

export default class AccountApi {
    static async getTemplates(): Promise<Template[]> {
        const templates = await FetchClient.get('http://localhost:3333/templates') as unknown as Template[];

        return templates;
    }

    static async addTemplate(template: Template) {
        const templates = await FetchClient.post('http://localhost:3333/templates', template) as unknown as Template[];

        return templates;
    }
}