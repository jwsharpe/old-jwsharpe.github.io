const fs = require("fs");

const LAYOUT_FILE = "../layouts/post.html";
const POST_FILE = "../posts/markdown/05.html";
const FILE_TO_WRITE = "../posts/5.html";

return fs.readFile(LAYOUT_FILE, function(err, buf) {
  const html = buf.toString();
  const htmlArray = html.split("<!-- yield -->");

  fs.readFile(POST_FILE, function(err, buf) {
    const post = buf.toString();

    fs.writeFile(FILE_TO_WRITE, htmlArray[0] + post + htmlArray[1], e => {
      e ? console.log(e) : console.log("success");
    });
  });
});
