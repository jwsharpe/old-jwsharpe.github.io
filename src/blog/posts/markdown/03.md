
# Spinning Up Desktop Apps as a Web Developer using Electron


TLDR;
```
npx create-electron-app app-name
npm start
```

## Electron

The github team brough us [Electron](https://electronjs.org/), a cross platform application platform that allows Web-trained developers to spin up desktop applications quickly and fluidly. Electron attempts to bridge the benefits of web-development tools and cross platform solutions of the internet to our personal computers as desktop applications.

In order to do this, electron has allowed developers to bring in their knowledge of HTML/CSS/JS into application development. Although with some slight differences, the DOM still exists for javascript, navigating to web-pages still exists and many of the expectations we have of the web are allowed to exist on a desktop environment.

Many strong desktop applications have been developed using electron such as Atom/VSCode editors and Slack.

In order to start using Electron we can use a funky npx command and it will spit out minimum boilerplate code.

```sh
npx create-electron-app cat-button #=>

cat-button
- node_modules
    - ...
- src
    - index.css
    - index.html
    - index.js
- package.json
- yarn.lock
```

In our source folder we are given a couple of example files that allow us to launch an application. We can now run

```sh
npm start
```

And it will launch up the hello world application with Chrome Dev Tools!
![hello world!](../images/04/helloworld.png)

From here you are given complete freedom as a web-developer.

We can do DOM-manipulation via the same methods we are used to,

![dom manipulation.](../images/04/dommanip.png)

And we can navigate to different views using href.

![page 1](../images/04/page1.png)
![page 2](../images/04/page2.png)

## Where to go.

Electron also gives us access to a ton of new libraries that allow for [file-manipulation](https://electronjs.org/docs/api/file-object) or bluetooth integration. There are also many more things supported and I encourage anyone to checkout the [Electron Docs](https://electronjs.org/docs)

If you have any questions for me, feel free to shoot me an email below.

Thanks for reading.
