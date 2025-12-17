export class ApiService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/comments';
    }

    async getComments(limit = 5) {
        const randomPostId = Math.floor(Math.random() * 100) + 1;
        const response = await fetch(`${this.url}?postId=${randomPostId}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
}