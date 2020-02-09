const posts = [
  {
    title: "Javascript: var, let and the JS interpreter",
    description: "Why do we have two statements for the same thing?",
    date: "February 2020"
  },
  {
    title: "Using React State Hooks to make a 'Like' Button",
    description: "An introduction to react hooks!",
    date: "January 2020"
  },
  {
    title: "Setting up Fetch Requests for a Rails API backend",
    description: "Quick fetch reference for external APIs in Javascript",
    date: "December 2019"
  },
  {
    title: "Implementing Simple Collision Handling with Ruby2D",
    description: "A fun and prototypal graphics library for ruby",
    date: "September 2019"
  }
];

const ul = document.getElementsByClassName("blog-posts")[0];

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
