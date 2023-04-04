<template>
    <div class="popup">
        <h3 class="popup__header">
            {{ header }}
        </h3>
        
        <input 
            v-if="hasInput"
            type="text"
            class="popup__input"
            v-model="popupData"
         />
                                 
        <div class="popup__buttons">
            <button 
                class="popup__button popup__button_exit"
                @click="exit"
            >
                Exit
            </button>

            <button 
                class="popup__button popup__button_proceed"
                @click="proceed"
            >
                Proceed
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Popup extends Vue {
    public name: string = 'Popup';
    public popupData: string = '';

    @Prop() header: string;
    @Prop() hasInput: boolean;

    proceed() {
        this.$emit('proceed', this.popupData);
    }

    exit() {
        this.$emit('exit');
    }
}
</script>

<style lang="scss">
@import '../scss/styles';

.popup {
    @include flex(
        column,
        $justify-content: space-evenly, 
        $align-items:center
    );
    @include size(30rem, 15rem);
    @include text-format($color: $black);
    
    margin: 0 1rem;
    padding: 1rem 0;

    background-color: $white;
    border-radius: 1rem;

    &__input {
        @include size(80%);

        border: 0.2rem solid $light-green;
        border-radius: 0.6rem;
        outline: none;
    }

    &__buttons {
        @include flex(row, $justify-content: space-evenly);
        @include size(80%);
    }

    &__button {
        @include size(9rem, 3rem);
        @include text-format($weight: 700);
                
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    &__button_exit {
        background: $white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    &__button_proceed {
        @include text-format($color: $white);
        
        background: $light-green;
    }
}
</style>
