import { Template } from '../abstracts/Interface';
import TemplateApi from './TemplateApi';

export default class TemplateModel {
    public static getSelectedTemplates(templates: Template[]): Template[] {
        return templates.filter((template: Template) => {
            return template.selected;
        });
    }

    public static getActiveTemplate(templates: Template[]): Template {
        const activeTemplate = templates.find((template: Template) => template.active) as Template;

        return activeTemplate;
    }

    public static async selectTemplate(templates: Template[], templateToSelect: Template): Promise<Template[]> {
        return templates.map((template: Template) => {
            if (template.id === templateToSelect.id) {
                template.selected = true;
            }

            return template;
        });
    }

    public static async unselectTemplate(templates: Template[], templateToUnselect: Template): Promise<Template[]> {
        return templates.map((template: Template) => {
            if (template.id == templateToUnselect.id) {
                template.selected = false;
            }

            return template;
        });
    }

    public static async getNewTemplate(templateTitle: string) {
        const templateId = Date.now().toString();

        return {
            id: templateId,
            title: templateTitle,
            code: '<em>Replace this with your code, Code away baby!</em>',
            selected: false    
        }
    }

    public static async refreshTemplate(selectedTemplates: Template[], templateToRefresh: Template): Promise<Template[]> {
        const initialTemplates = await TemplateApi.getTemplates();
        const initialTemplate = initialTemplates.find((template: Template) => template.id == templateToRefresh.id) as Template;
        
        return selectedTemplates.map((selectedTemplate: Template) => {
            if (selectedTemplate.id === templateToRefresh.id) {
                templateToRefresh.code = initialTemplate.code;
            }

            return selectedTemplate;
        });
    }

    public static async activateTemplate(templates: Template[], templateToActivate: Template): Promise<Template[]> {
        return templates.map((template: Template) => {
            if (template.id === templateToActivate.id) {
                template.active = true;
                return template;
            }

            if (template.active) {
                return {
                    id: template.id,
                    title: template.title,
                    code: template.code,
                    selected: template.selected
                }
            } 

            return template;
        });
    }


    // public static deleteTemplate(templates: Template[], templateId: string): Template[] {
    //     return templates.filter(template => template.id !== templateId);
    // }
}