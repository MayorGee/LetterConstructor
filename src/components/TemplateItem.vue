<template>
    <li v-if="!template.selected"
        class="template"
        @click="handleClickTemplate($event)"
    >
        <span 
            class="template__title"
            
        >
            {{ template.title }}
        </span>
        <span>
            <img 
                src="assets/icons/delete.png"
                alt="Template Delete Icon"
                class="template__delete-icon"
            />
        </span>

        <Backdrop 
            v-if="isActiveDeleteTemplateBackdrop"
            header="Proceed to Delete?"
            :hasInput="false"
            @exit="handleExitBackdrop"
            @proceed="handleProceedBackdrop" 
        />
        
    </li>                                    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Template } from '../abstracts/Interface';
import Backdrop from './Backdrop.vue';

@Component({
    components: {
        Backdrop
    }
})
export default class TemplateItem extends Vue {
    public name: string = 'TemplateItem';
    public isActiveDeleteTemplateBackdrop: boolean = false;

    @Prop({ required: true }) template: Template;
    
    @Action('activateTemplate') activateTemplate: Function;
    @Action('deleteTemplate') deleteTemplate: Function;
    @Action('selectTemplate') selectTemplate: Function;

    handleClickTemplate(ev: Event) {
        const eventTarget = (ev.target as HTMLElement);

        if (eventTarget.className.includes('template__delete-icon')) {
            return this.showDeleteTemplateBackdrop()
        }

        if (eventTarget.className.includes('template')) {
            this.selectTemplate(this.template);
            this.activateTemplate(this.template);
        }
    }

    handleExitBackdrop() {
        this.hideDeleteTamplateBackdrop();
    }

    handleProceedBackdrop() {
        this.hideDeleteTamplateBackdrop();
        this.deleteTemplate(this.template);
    }

    hideDeleteTamplateBackdrop() {
        this.isActiveDeleteTemplateBackdrop = false;
    }

    showDeleteTemplateBackdrop() {
        this.isActiveDeleteTemplateBackdrop = true;
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.template {
    @include flex($justify-content: space-between);
    @include size(100%);

    padding: 0.3rem 0.5rem;
    margin: 0.2rem 0;
    
    border: 1px solid $black;
    border-radius: 0.2rem;

    cursor: pointer;

    &__delete-icon {
        @include size(2rem, 2rem);
    }
}
</style>