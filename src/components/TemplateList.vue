<template>
    <ul class="template-list">
        <TemplateItem 
            v-for="template in templates"
            :key="template.id"
            :template="template"
        />
    </ul>                                     
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Template } from '../abstracts/Interface';
import TemplateItem from './TemplateItem.vue';

@Component({
    components: {
        TemplateItem
    }
})
export default class TemplateList extends Vue {
    public name: string = 'TemplateList';

    @Getter('templates') templates: Template[];
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