export function formatTimeDifference(dateString) {
    const givenDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - givenDate) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000;
    const secondsInYear = 31536000;

    if (diffInSeconds < secondsInMinute) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInMonth) {
        const days = Math.floor(diffInSeconds / secondsInDay);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInYear) {
        const months = Math.floor(diffInSeconds / secondsInMonth);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        // For dates more than a year ago, return the exact date
        return givenDate.toDateString();//toLocaleDateString(); // or `givenDate.toDateString()` for a more human-readable format
    }
}

