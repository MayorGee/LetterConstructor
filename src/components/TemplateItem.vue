<template>
    <li v-if="!template.selected"
        class="template"
        @click="handleClickTemplate"
    >
        <span class="template__title">
            {{ template.title }}
        </span>
    </li>                                    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Template } from '../abstracts/Interface';

@Component
export default class TemplateItem extends Vue {
    public name: string = 'TemplateItem';

    @Prop({ required: true }) template: Template;
    
    @Action('selectTemplate') selectTemplate: Function;
    @Action('activateTemplate') activateTemplate: Function;

    handleClickTemplate() {
        this.selectTemplate(this.template);
        this.activateTemplate(this.template);
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
}
</style>