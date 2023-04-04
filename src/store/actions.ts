import { ActionTree } from 'vuex';
import { Template } from '../abstracts/Interface';
import TemplateApi from '../model/TemplateApi';
import TemplateModel from '../model/TemplateModel';
import { State } from './types';

const actions: ActionTree<State, any> = {
    async loadTemplates({ commit }) {
        const templates = await TemplateApi.getTemplates();
        
        commit('setTemplates', templates);
    },

    async addTemplate({ commit }, templateTitle: string) {
        const newTemplate = await TemplateModel.getNewTemplate(templateTitle);

        await TemplateApi.addTemplate(newTemplate);
        commit('addTemplate', newTemplate);
    },

    async selectTemplate({ commit, state }, templateToSelect: Template) {
        const templates = await TemplateModel.selectTemplate(state.templates, templateToSelect);
        
        commit('setTemplates', templates);
    },
    
    async unselectTemplate({ commit, state }, templateToSelect: Template) {
        const templates = await TemplateModel.unselectTemplate(state.templates, templateToSelect);
        
        commit('setTemplates', templates);
    },

    async activateTemplate({ commit, state }, templateToActivate: Template) {
        const templates = await TemplateModel.activateTemplate(state.templates, templateToActivate);
        
        commit('setTemplates', templates);
    },

    async refreshTemplate({ commit, state }, templateToRefresh: Template) {
        const templates = await TemplateModel.refreshTemplate(state.templates, templateToRefresh);
        
        commit('setTemplates', templates);
    },

    async togglePopup({ commit }) {
        commit('togglePopup');
    },

    // async deleteTemplate({ commit, state }, templateToDelete: Template) {
    //     const templates = TemplateModel.deleteTemplate(state.templates, templateToDelete.id);
        
    //     commit('setTemplates', templates);
    // },
}

export default actions;