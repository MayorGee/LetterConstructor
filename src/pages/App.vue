<template>
    <LetterConstructor />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LetterConstructor from '../components/LetterConstructor.vue';

@Component({
    components: {
        LetterConstructor
    }
})
export default class App extends Vue {
    public name = 'App';
}

</script>

