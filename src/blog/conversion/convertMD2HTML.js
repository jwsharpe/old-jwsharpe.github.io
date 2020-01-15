var showdown = require("showdown"),
  fs = require("fs"),
  converter = new showdown.Converter();

const FILE_TO_CONVERT = "../posts/markdown/05.md";
const FILE_TO_WRITE = FILE_TO_CONVERT.slice(0, -2) + "html";

//
new Promise((res, rej) => {
  return fs.readFile(FILE_TO_CONVERT, function(err, buf) {
    const html = converter.makeHtml(buf.toString());
    res(html);
  });
})
  .then(res => {
    fs.writeFile(FILE_TO_WRITE, res, e => {
      if (e) {
        console.log(e);
      } else {
        console.log("Success!");
      }
    });
  })
  .catch(console.log);
