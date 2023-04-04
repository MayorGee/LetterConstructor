<template>
    <div class="backdrop">
        <Popup
            :header="header"
            :hasInput="hasInput"
            @exit="exit"
            @proceed="proceed"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Popup from './Popup.vue';

@Component({
    components: {
        Popup
    }
})
export default class Backdrop extends Vue {
    public name: string = 'Backdrop';

    @Prop() header: string;
    @Prop() hasInput: boolean;

    exit() {
        this.$emit('exit');
    }

    proceed(popupData: string) {
        this.$emit('proceed', popupData);
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.backdrop {
    @include flex(
        $justify-content: center, 
        $align-items: center
    );

    @include size(100%, 100%);

    position: fixed;
    background-color: $faint-black;
}
</style>