const posts = [
  {
    title: "Using React State Hooks to make a 'Like' Button",
    description: "An introduction to react hooks!",
    date: "January 20, 2020"
  },
  {
    title: "Setting up Fetch Requests for a Rails API backend",
    description: "Quick fetch reference for external APIs in Javascript",
    date: "November 2019"
  },
  {
    title: "Implementing Simple Collision Handling with Ruby2D",
    description: "A fun and prototypal graphics library for ruby",
    date: "September 2019"
  }
];

const ul = document.getElementsByClassName("blog-posts")[0];
console.log(ul);

const renderPosts = post => {
  posts.forEach(renderPost);
};

const renderPost = (post, index) => {
  const { title, date, description } = post;
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = "/javascript-technonaut/0" + (posts.length - index - 1);
  a.innerText = title;
  li.append(a);

  const small = document.createElement("small");
  small.innerText = date + " • " + description;
  li.append(small);

  ul.append(li);
};

renderPosts();
