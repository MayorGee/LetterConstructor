<template>
    <ul class="template-list">
        <SelectedTemplate
            v-for="template in selectedTemplates"
            :key="template.id"
            :template="template"
            :class="`${template.active ? 'selected-template__active' : ''}`"
            :isTemplateActive="template.active"
            @activate="handleActivateTemplate"
            @refresh="handleRefreshTemplate"
            @unselect="handleUnselectTemplate"
        />
    </ul>                                    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { Template } from '../abstracts/Interface';
import SelectedTemplate from './SelectedTemplate.vue';

@Component({
    components: {
        SelectedTemplate
    }
})
export default class SelectedTemplates extends Vue {
    public name: string = 'SelectedTemplates';

    @Action('activateTemplate') activateTemplate: Function;
    @Action('refreshTemplate') refreshTemplate: Function;
    @Action('unselectTemplate') unselectTemplate: Function;
    @Getter('selectedTemplates') selectedTemplates: Template[];

    handleActivateTemplate(template: Template) {
        this.activateTemplate(template);
    }

    handleRefreshTemplate(template: Template) {
        this.refreshTemplate(template);
    }

    handleUnselectTemplate(template: Template) {
        this.unselectTemplate(template);
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.template-list {
    @include size(90%);

    margin: auto;
    padding: 0;
}
</style>