<template>
    <div 
        class="backdrop"
        @click="exit($event)">
        <Popup
            :header="header"
            :hasInput="hasInput"
            @exit="exit($event)"
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

    exit(ev: Event) {
        const eventTarget = (ev.target as HTMLElement);

        if (eventTarget.className.includes('popup__button_exit') || !eventTarget.className.includes('popup')) {
            this.$emit('exit');
        }
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
    
    top: 0;
    right: 0;
    left: 0;

    position: fixed;
    background-color: $faint-black;
}
</style>