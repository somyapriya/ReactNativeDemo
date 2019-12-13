# ReactNativeDemo
A sample react native app to demonstrate api calls and redux. ReactNativeDemo app  allow users to see listing of NY Times Most Popular Articles and can filter the search result based on period. Please follow the below instructions to run this app.


**Prerequisite**

1) Node should be installed in the system.
2) React native environment should be set up in the system.
3) Xcode should be installed in system.
4) clone the repository.
5) cd into ReactNativeDemo.
6) npm install .
7) react-native link,
8) cd into ios
9) react-native run-ios or from your folder goto ios folder and open Project.xcodeproj

This Application consist of App.js(root file) file in src folder . Src folder consists of subfolders:

**Components** - This folder consists all reusable components like CTAButton.js, HeaderComponent.js.

**FetchApi** - This folder has api.js file, where api call is being done

**Navigations** - This folder has idex.js file, where navigations between screens and drawer navigations is done

**Reducers** - This folder has appReducer.js file in which redux reducers is been handled

**Screens** - This folder has subfolders DetailScreen, ListingScreen,LoginScreen

 1) LoginScreen- LoginScreen.js is the very first screen of application where user need to enter user name password and styling of this LoginScreen is done in Styling.js .
 
2) ListingScreen- ListingScreen.js is of listing of NY Times Most Popular Articles and can filter the search result based on period dropdown.Styling of this ListingScreen is done in Styling.js.Header consit hamburger icon which will open the drawer and logout button will logout user from the  app.

3) DetailScreen- DetailScreen.js is the detail of the item which user wants to check , all the details here are obtained by using redux store.

**App.js** - It's a root file which includes redux store and renders all screens based on navigations.



