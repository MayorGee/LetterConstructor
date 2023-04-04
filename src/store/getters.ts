import TemplateModel from '../model/TemplateModel';
import { State } from './types';

const getters = {
    templates(state: State) {
        return state.templates;
    },

    selectedTemplates(state: State) {
        return TemplateModel.getSelectedTemplates(state.templates);
    },

    activeTemplate(state: State) {
        return TemplateModel.getActiveTemplate(state.templates);
    }
}

export default getters;