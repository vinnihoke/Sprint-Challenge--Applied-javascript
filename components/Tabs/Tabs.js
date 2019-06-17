class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab; 
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    //  <- Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll(".card");
        console.log(this.cards);
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards = document.querySelectorAll(`div.card[data-tab="${this.tabData}"]`);
      }

    //  <- Delete this comment block when you work on the if statement
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', this.selectTab);
  };

  selectTab = () =>{

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab")
    console.log("Select Tab is working")
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach(tab => {
    //   tab.classList.remove('active-tab');
    // })

    for(const tab of tabs){
      tab.classList.remove("active-tab");
    }

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");
    // Iterate through the NodeList setting the display style each one to 'none'

    // cards.forEach(card => {
    //   card.setAttribute("display", "none");
    // })
    

    for(const card of cards){
      card.style.display = "none";
    }
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");
    
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
    
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
    console.log("Select Card method is working");
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

let tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => new TabLink(tab));