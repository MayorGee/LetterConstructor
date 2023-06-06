import { Template } from '../abstracts/Interface';
import TemplateApi from './TemplateApi';

export default class TemplateModel {
    static defaultTemplateCode = '<em>Replace this with your code, Code away baby!</em>';

    static getSelectedTemplates(templates: Template[]): Template[] {
        return templates.filter((template: Template) => {
            return template.selected;
        });
    }

    static getActiveTemplate(templates: Template[]): Template {
        return templates.find((template: Template) => template.active) as Template;
    }

    static async selectTemplate(templates: Template[], templateToSelect: Template): Promise<Template[]> {
        return templates.map((template: Template) => {
            if (template.id === templateToSelect.id) {
                template.selected = true;
            }

            return template;
        });
    }

    static async unselectTemplate(templates: Template[], templateToUnselect: Template): Promise<Template[]> {
        return templates.map((template: Template, index: number) => {
            if (template.id == templateToUnselect.id) {
                template.selected = false;

                // (templates[index - 1], 'selected', true);
            }

            return template;
        });
    }

    static async getNewTemplate(templateTitle: string) {
        const templateId = Date.now().toString();

        return {
            id: templateId,
            title: templateTitle,
            code: TemplateModel.defaultTemplateCode,
            selected: false    
        }
    }

    static async refreshTemplate(selectedTemplates: Template[], templateToRefresh: Template): Promise<Template[]> {
        const initialTemplates = await TemplateApi.getTemplates();
        const initialTemplate = initialTemplates.find((template: Template) => template.id == templateToRefresh.id);

        return selectedTemplates.map((selectedTemplate: Template) => {
            if (selectedTemplate.id === templateToRefresh.id) {
                templateToRefresh.code = initialTemplate ? initialTemplate.code : TemplateModel.defaultTemplateCode;
            }
   
            return selectedTemplate;
        });
    }

    static async activateTemplate(templates: Template[], templateToActivate: Template): Promise<Template[]> {
        return templates.map((template: Template) => {
            if (template.id === templateToActivate.id) {
                template.active = true;
                return template;
            }

            if (template.active) {
                template.active = false;
                return template;
            } 

            return template;
        });
    }

    static deleteTemplate(templates: Template[], templateId: string): Template[] {
        return templates.filter(template => template.id !== templateId);
    }
}