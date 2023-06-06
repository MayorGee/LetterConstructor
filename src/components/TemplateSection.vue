<template>
    <div class="template-section">
        <div class="template-section__header">
            <h1 class="template-section__title">
                Templates
            </h1>

            <p 
                class="template-section__action"
                @click="handleRefreshTemplates"
            >
                <img 
                    src="assets/icons/refresh.png"
                    alt="template drag-icon"
                    class="template-section__refresh-icon"
                />
                <span>Refresh</span>
            </p>
        </div>
                
        <div class="template-section__content">
            <p class="template-section__info">
                Click template to display it on the Editor
            </p>

            <SelectedTemplates />

            <p class="template-section__info">
                Select template from options below
            </p>

            <TemplateList />

            <button 
                class="template-section__button"
                @click="addTemplate"
            > 
                Add Template
            </button>
        </div>    
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import SelectedTemplates from './SelectedTemplates.vue';
import TemplateList from './TemplateList.vue';

@Component({
    components: {
        SelectedTemplates,
        TemplateList,
    }
})
export default class TemplateSection extends Vue {
    public name: string = 'TemplateSection';

    @Action('refreshTemplates') refreshTemplates: Function;

    addTemplate() {
        this.$emit('addTemplate');
    }

    handleRefreshTemplates() {
        this.refreshTemplates();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.template-section {
    @include flex(column);
    @include size(25%, 100%);

    &__header {
        @include flex($justify-content: space-between);
    }

    &__action {
        @include flex(
            $justify-content: space-between,
            $align-items: center
        );
        @include text-format(
            1.8rem, 
            $color: $light-green,
            $weight: 550,
            $text-decoration: none
        );

        cursor: pointer;
    }
    
    &__title {
        @include text-format(
            1.8rem, 
            $color: $light-green
        );
    }

    &__content {
        @include size(100%, 100%);
        margin: auto;
        padding: 0.5rem 0.3rem;

        overflow-y: scroll;
        box-shadow: $section-shadow;
    }

    &__refresh-icon {
        @include size(1.5rem, 1.5rem);
        margin-right: 0.1rem;
    }

    &__info {
        margin: 1rem 0;
    }

    &__button {
        @include size(15rem);
        @include text-format($weight: bold);

        display: block;
        margin: 1.5rem auto;

        cursor: pointer;
    }
}
</style>