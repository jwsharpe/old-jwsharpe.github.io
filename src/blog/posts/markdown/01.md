# Creating an adaptive Card Focused webpage using nested CSS-Grid.

[CSS Grid](https://en.wikipedia.org/wiki/CSS_grid_layout) is a layout manager that allows for easy implementation of adaptive layouts. Just like Flex-box, this layout manager is built into CSS and is relatively new. And as compared to Flex or Float layouts, I believe that Grid is the most intuitive for CSS novices as it allows programmers a very simplistic model for transferring physical pen-paper prototypes onto website pages.

In this tutorial we are going to build a ['holy grail'](https://en.wikipedia.org/wiki/Holy_grail_(web_design)) style website. The main content box will be filled with grid cards that will adapt to the shape of the container. We will begin to build this website from the top to the bottom.

## Creating the Holy Grail

Firstly, we want to build a frame that will support a header, left-bar, right-bar, main content and footer container. CSS Grid gives us a very visual way to concoct a design.
```scss
#container {
  display: grid;
  grid-template-columns: 75px 1fr 75px;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "header header header"
    "leftbar main rightbar"
    "footer footer footer";
}
```
This CSS sets up our container to contain 5 different layout workspaces in grid. New to Grid is the `fr` unit. This will allow us to divide up space fractionally by the remainder of the container. In our case, our layout will have a statically defined header, sidebars and footer.

In order to connect these grid areas, we simply use the `grid-area: name;` function.
```css
#header {
  grid-area: header;
  background: #d32f2f;
}

#footer {
  grid-area: footer;
  background: #2196f3;
}

#leftbar {
  grid-area: leftbar;
  background: #ffeb3b;
}

#rightbar {
  grid-area: rightbar;
  background: #ffeb3b;
}

#main {
  grid-area: main;
  padding: 8px;
}
```
![Image](../images/02/helloworld.png)
*[Play Around Here.](https://codepen.io/jwsharpe/pen/BaBeMyJ)*

Notice that in our case, the id/class methods in CSS do not correspond to the area names automatically. We have to set them using the `grid-area` function.

## Creating a Card

Now let us create a card view in order to populate our main area in our website. Once again we will be using grid to make card views. The design for these cards are shameless stolen from the [Material Design](https://material.io/components/cards/) philosophies, but the implementation will be done with grid.

```scss
.card {
  height: 300px;
  width: 250px;
  display: grid;
  grid-template-rows: 40% 1fr;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  .card_photo {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  background: #f44336;
  }

  .card_content {
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  
    .card_title {
    color: #212121;

    font-weight: 800;
    align-self: center;
    padding-inline-start: 16px;
    }
    .card_description {
    color: #757575;
    padding-block-end: 8px;
    padding-inline-start: 16px;
    padding-inline-end: 16px;
    }
    .card_action {
    color: #2196f3;
    font-weight: 800;
    align-self: center;
    padding-inline-start: 16px;
    font-size: 0.8em;
    }
  }
}



```

Besides all of the flavor styling used to create a card layout, many of the techniques used to create the layout was embedding grid within a grid layout. The card component is separated into picture/content, and is further separated in the content tab by, title, description and action.

This design choice will allow us to quickly modify the card's content if it is ever needed.

![image](../images/02/card01.png)
*[Play Around Here.](https://codepen.io/jwsharpe/pen/pozmGbG)*

## Embedding More Grid

We might feel bound at this point if we try to add another card to the main container. Luckily for us CSS Grid also gives us a way to populate and fill a space by wrapping these card components. After adding 10 cards, let us modify our `#main` tag in order to support wrapping of content.
```css
#main {
  grid-area: main;
  padding: 8px;

  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, 250px);
}
```
We then can embed another grid display into our html. This one includes the `repeat(auto-fill)` function which will allow css grid to populate card content and wrap the container's items around to give us a responsive layout.

And to clean it up let's add another line of code that will center the cards in the container.

```css
#main {
  grid-area: main;
  padding: 8px;

  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
}
```

![image](../images/02/cards.png)
*[Play Around Here.](https://codepen.io/jwsharpe/pen/eYOaxRO)*

Now we have a fully adaptable card layout that will fill card views in depending on the size of the screen.

## Where to Go

This is not the only way to go about this design, nor is it the most efficient way. But it gives a great overview of how powerful CSS Grid can be and the simple setup it requires. 

If you haven't had a chance to visit the codepens, they give programmers a very easy way to play and modify html/css/js front end code right in the browser.

If you want to learn more about CSS Grid there is a game online that will make you familiar with all the options you have available called [CSS Grid Garden](https://codepip.com/games/grid-garden/).

And if you have any questions for me, feel free to shoot me an email below.

Thanks for reading!