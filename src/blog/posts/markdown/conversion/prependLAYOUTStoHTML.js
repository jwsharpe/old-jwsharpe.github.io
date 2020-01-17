const fs = require("fs");

const POST = "05.html";
const POST_FILE = "./src/blog/posts/markdown/" + POST;
const FILE_TO_WRITE = "./javascript-technonaut/" + POST;
const LAYOUT_FILE = "./src/blog/layouts/post.html";

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
