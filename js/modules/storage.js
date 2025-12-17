const STORAGE_KEY = 'dagestanFeedback';

export const storageService = {
    getFeedbacks() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error(e);
            return [];
        }
    },

    saveFeedbacks(feedbacks) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
        } catch (e) {
            console.error(e);
        }
    }
};
