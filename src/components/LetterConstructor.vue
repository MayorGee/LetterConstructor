<template>
    <div class="letter-constructor">
        <TemplateSection @addTemplate="handleAddTemplate" />
        <TemplateEditor :template="activeTemplate" />
        <LetterView :selectedTemplates="selectedTemplates" />
        <Backdrop 
            v-if="isActiveAddTemplateBackdrop"
            header="Add Template"
            :hasInput="true"
            @exit="handleExitBackdrop"
            @proceed="handleProceedBackdrop" 
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { Template } from '../abstracts/Interface';
import TemplateSection from './TemplateSection.vue';
import TemplateEditor from './TemplateEditor.vue';
import LetterView from './LetterView.vue';
import Backdrop from './Backdrop.vue';

@Component({
    components: {
        TemplateSection,
        TemplateEditor,
        LetterView,
        Backdrop
    },
})
export default class LetterConstructor extends Vue {
    public name: string = 'LetterConstructor';
    public isActiveAddTemplateBackdrop: boolean = false;

    @Action('addTemplate') addTemplate: Function;
    @Getter('activeTemplate') activeTemplate: Template;
    @Getter('selectedTemplates') selectedTemplates: Template[];

    handleExitBackdrop() {
        this.hideAddTemplateBackdrop();
    }

    handleProceedBackdrop(templateTitle: string) {
        this.hideAddTemplateBackdrop();

        if(templateTitle) {
            this.addTemplate(templateTitle);
        }        
    }

    handleAddTemplate() {
        this.showAddTemplateBackdrop()
    }

    hideAddTemplateBackdrop() {
        this.isActiveAddTemplateBackdrop = false;
    }

    showAddTemplateBackdrop() {
        this.isActiveAddTemplateBackdrop = true;
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.letter-constructor {
    @include flex($justify-content: space-evenly);
    @include size(100%, 100%);
}
</style>