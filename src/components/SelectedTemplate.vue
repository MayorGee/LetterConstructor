<template>
    <li class="selected-template" @click="activate">
        <div class="selected-template__main">
            <img 
                src="assets/icons/drag.png"
                alt="Template Drag Icon"
                class="selected-template__icon"
            />
            <span class="template__title">
                {{ template.title }}
            </span>
        </div>

        <div class="selected-template__actions" v-if="isTemplateActive">
            <img 
                src="assets/icons/refresh.png"
                alt="Template Refresh Icon"
                class="selected-template__icon"
                @click="refresh"
            />
            <img 
                src="assets/icons/delete.png"
                alt="Template Delete Icon"
                class="selected-template__icon"
                @click="unselect"
            />
        </div>
    </li>                                    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Template } from '../abstracts/Interface';

@Component
export default class SelectedTemplate extends Vue {
    public name: string = 'SelectedTemplate';
    
    @Prop({ required: true }) template: Template
    @Prop({ default: false, required: false }) isTemplateActive: Template
    
    unselect() {
        this.$emit('unselect', this.template)       
    }

    refresh() {
        this.$emit('refresh', this.template)       
    }

    activate() {
        this.$emit('activate', this.template);
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.selected-template {
    @include flex(
        $justify-content: space-between,
        $align-items: center
    );

    @include size(100%);

    padding: 0.3rem 0.5rem;
    margin: 0.2rem 0;

    border: 0.1rem solid $black;
    border-radius: 0.2rem;

    cursor: pointer;

    &__main {
        @include flex($align-items: center);
    }

    &__actions {
        @include flex()
    }

    &__icon {
        @include size(1.5rem, 1.5rem);
        margin-right: 0.2rem;
    }

    &__active {
        border: 2px solid $light-green;
    }
}
</style>