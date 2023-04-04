import { Template } from '../abstracts/Interface';
import { State } from './types';

const mutations = {
    setTemplates(state: State, templates: Template[]) {
        state.templates = templates;
    },

    addTemplate(state: State, newTemplate: Template) {
        state.templates.push(newTemplate);
    },
}

export default mutations;