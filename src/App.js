import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Development: Online Wine Shop
        </h1>
      </header>
      <div className="goal">
        <b>Project Goal: </b>
        <p>The goal of this project was to touch up on my React skills and build a simple online wine shop. Within the site, the user can filter 
          between different wine types (red, white, rosé, sparkling), and wine regions (France, America, Argentina, Greece). The user can sort the store
          items by price as well.
        </p>
        <p>Additionally, a goal for this project was to practice designing an intuitive and easy to use interface. The way I arranged my components 
          were backed by usability principles which will be explored further.
        </p>
      </div>
      <div className="page-link">
        <div className="caption">
        <b>Click the Button to explore the site for yourself!</b>
        </div>
        <div id="button1">
          <a href="https://hilariousalpaca112.github.io/cs1300-development/" target="_blank">
        <button class="button button1">
            Click Me!
            </button>
            </a>
      </div>
      </div>
      <div className="usability-header">
        <h1>
          Usability Principles
        </h1>
      </div>
      <div className="usability-principles">
        <b>Usability: </b>
        <p>My main goal for the usability principles of this project was to create something that would be very easy for people to learn to use
          for the first time. 
           
        </p>
        <p>The images below show the three main components of the site.
        </p>
      </div>

      <div className="image-container">

        <div className="filter">
        <div>
        <img className="filter-img" src={require("./images/filter.png") }></img>
        </div>
        <div>
        <p className="filter-caption">
          Filtering and sorting functionalities
        </p>
        </div>
        </div>

        <div className="shop">
        <div>
        <img className="shop-img" src={require("./images/shop.png") }></img>
        </div>
        <div>
        <p className="shop-caption">
          List of items in shop
        </p>
        </div>
        </div>


        <div className="cart">
        <div>
        <img className="cart-img" src={require("./images/cart.png") }></img>
        </div>

        <div>
        <p className="cart-caption">
          Shopping cart with items in it
        </p>
        </div>
        </div>
      </div>

      <div className="explain">
        
        <p>All of these components have clear labels as to what they do and their purpose on the site. This leaves little confusion when going to shop 
          for a wine. When people go to online shop, they expect the process of finding exactly what they want to be as easy as possible and the layout 
          of this site helps achieve that. 
        </p>

      </div>

      <div className="conclusion-header">
        <h1>
          Conclusion
        </h1>
      </div>
      <div className="conclusion">
        <b>Insights: </b>
        <p>
          From doing this project, I gained lots of insight into both React and design concepts. I learned that state management in React can be pretty 
          difficult at timers, but also very powerful once you figure out how it works. In terms of design, I have found it useful to include labels for 
          as many things as possible so that their purpose on the page is clear to those using it. However, it is important to not overcrowd the page with them, 
          so it takes some deliberation to decide where and how to label!
        </p>
        <b>Next Steps: </b>
        <ol>
          <li>
            Pull wine data from API to have consistent images
          </li>
          <li>
            Add more regions
          </li>
          <li>
            Build checkout page
          </li>
          <li>
            More UI cleanup
          </li>
        </ol>
      </div>

    </div>
  );
}

export default App;
