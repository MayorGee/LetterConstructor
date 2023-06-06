<template>
    <LetterConstructor />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import LetterConstructor from '../components/LetterConstructor.vue';

@Component({
    components: {
        LetterConstructor
    }
})
export default class App extends Vue {
    public name = 'App';

    @Action('loadTemplates') loadTemplates: Function;

    created() {
        this.loadTemplates();
    }
}

</script>