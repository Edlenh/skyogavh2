export enum SelectedPage{
    Home = "home",
    About = "about",
    Gallery = "gallery",
    Review = "reviews",
    Contact = "contact"
  }


export interface ReviewType{
  icon: JSX.Element;
  desc: string;
  name: string;
}

//this is typescript specific 
// you will pass this around the entire app
//great for catching bugs
  