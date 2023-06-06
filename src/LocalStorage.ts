import { State } from './store/types';

export default class LocalStorage {
    static storeKey = 'store';

    static setStore(state: State) {
        localStorage.setItem(this.storeKey, JSON.stringify(state));
    }

    static getStore(): State | null {
        const templates = localStorage.getItem(this.storeKey);

        if (!templates) {
            return null;
        }

        return JSON.parse(templates);
    }
}