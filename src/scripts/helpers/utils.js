export class Utils {
  static readFile(filePath, callback) {
    const file = window.location.origin + filePath;
    fetch(file)
      .then(response => {
        return response.text();
      })
      .then(data => {
        callback(data);
      });
  }

  static formatDate(date) {
    const dt = new Date(date);
    const day = dt.getDate();
    const year = dt.getFullYear();
    const month = dt.toLocaleString("en-us", { month: "long" });
    return `${month} ${day}, ${year}`;
  }
}
