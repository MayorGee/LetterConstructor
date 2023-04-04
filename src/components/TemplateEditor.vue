<template>
    <div class="template-editor">
        <div class="template-editor__header">
            <h1 class="template-editor__title">
                Editor
            </h1>
        </div>
        
        <div class="template-editor__content">
            <textarea
                v-if="template"
                contentEditable
                class="template-editor__code"
                v-model="template.code"
            ></textarea>
        </div>
    
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Template } from '../abstracts/Interface';

@Component
export default class TemplateEditor extends Vue {
    public name: string = 'TemplateEditor';

    @Prop({ required: true }) template: Template;
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.template-editor {
    @include flex(column);
    @include size(35%);
    
    &__title {
        @include text-format(1.5rem, $color: $light-green);
    }

    &__content {
        @include size(100%, 100%);
        margin: auto;
        padding: 1rem;

        background-color: $dark-brown;
        
        overflow-y: scroll;
    }

    &__code {
        @include size(100%, 100%);

        color: $white;

        background: inherit;
        border: none;
        outline: none;
    }
}
</style>