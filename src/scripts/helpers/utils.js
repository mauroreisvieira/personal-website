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
}
