export default class SpecialMethod {
    static async copyToClipboard(text: string) {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text);
        }
    
        return Promise.reject('The Clipboard API is not available.');
    }
}