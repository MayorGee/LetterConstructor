<template>
    <div class="letter-view">
        <div class="letter-view__header">
            <h1 class="letter-view__title">
                View
            </h1>

            <span 
                class="letter-view__action"
                @click="toggleShowCode"
            >
                Raw
            </span>
        </div>
        
        <div class="letter-view__content">
            <template v-if="!showCode">
                <div
                    v-for="selectedTemplate in selectedTemplates"
                    :key="selectedTemplate.id"
                    v-html="selectedTemplate.code"
                ></div>
            </template>
            <template v-else>
                <p class="letter-view__icon">
                    <img
                        src="assets/icons/copy-to-clipboard.png"
                        alt="clipboard icon"
                        @click="highlightAll"
                    />
                </p>
                <div
                    v-for="selectedTemplate in selectedTemplates"
                    :key="selectedTemplate.id"
                >
                    {{ selectedTemplate.code }}                
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Template } from '../abstracts/Interface';
import { copyToClipboard } from '../abstracts/common';

@Component
export default class LetterView extends Vue {
    public name: string = 'LetterView';
    public showCode: boolean = false

    @Prop() selectedTemplates: Template[];

    toggleShowCode() {
       this.showCode = !this.showCode
    }

    async copyRawCode(selectedTemplates: Template[]) {
        let rawCode: string = '';

        selectedTemplates.forEach((selectedTemplate) => {
            rawCode += selectedTemplate.code;
        })

        await copyToClipboard(rawCode);
    }

    highlightAll() {
        this.copyRawCode(this.selectedTemplates)
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';


.letter-view {
    @include flex(column);
    @include size(35%);
    
    &__title {
        @include text-format(1.5rem, $color: $light-green);
    }

    &__header {
        @include flex();
    }

    &__action {
        margin-left: 2rem;
        cursor: pointer;
    }

    &__content {
        @include size(100%, 100%);

        margin: auto;
        padding: 1rem;

        overflow-y: scroll;
    }

    &__icon {
        @include size(2rem, 2rem);

        margin-left: 80%;
        cursor: pointer;
    }
}

</style>