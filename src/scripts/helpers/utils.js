export class Utils {
    static readFile(filePath, callback) {
        const file = window.location.origin + filePath;
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            callback(rawFile.responseText);
        }
        rawFile.send(null);
    }

    static formatDate(date) {
        const dt = new Date(date);
        const day = dt.getDate();
        const year = dt.getFullYear();
        const month = dt.toLocaleString('en-us', { month: 'long' });
        return `${month} ${day}, ${year}`;
    }
}
