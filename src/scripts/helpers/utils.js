export class Utils {
    static readFile(filePath, callback) {
        console.log(window.location.origin);
        console.log(window.location.pathname);
        const file = window.location.origin + filePath;
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            callback(rawFile.responseText);
        }
        rawFile.send(null);
    }
}
