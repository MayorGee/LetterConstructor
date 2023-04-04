import axios from 'axios';

export default class FetchClient {
    static async get(url: string): Promise<Response> {
        const data = await fetch(url);

        return data.json();
    }

    static async post(url: string, data: {}) {
        await axios.post(url, data);
    }
}