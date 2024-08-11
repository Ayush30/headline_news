# News Headlines App
This is a React Native application designed to fetch and display the latest news headlines. It incorporates various features and technologies to provide a smooth user experience and efficient state management.

# Features
## 1. Splash Screen:

Description: Displays a splash screen with a background image while the app is loading.
Implementation: The splash screen is shown for 7 seconds before navigating to the headlines screen. If data exists in AsyncStorage, it loads the headlines; otherwise, it fetches them from an API.

## 2. Headlines Screen:

Description: Shows a list of news headlines.
Implementation: Utilizes the FlatList component to display headlines. Initially, 10 headlines are shown. The list is updated every 10 seconds with 5 more headlines, and additional headlines can be loaded by pressing a button.

## 3. Redux for State Management:

Description: Manages the state of the headlines using Redux.
Implementation: Redux is used to manage the state of the headlines data. The headlineSlice reducer handles the state updates, and the store is configured with redux-persist to persist the state across app restarts.

## 4. Redux Persist:

Description: Persist the Redux store to AsyncStorage.
Implementation: redux-persist is configured to save the Redux state to AsyncStorage, ensuring that the headlines data is retained even after the app is closed and reopened.


## 5. Responsive Design:

Description: Adapts the layout and styles based on the platform and screen size.
Implementation: Uses platform-specific adjustments and styling to ensure a consistent user experience across different devices and operating systems.


## 6. Error Handling:

Description: Provides alerts if there are issues with fetching headlines or retrieving data.
Implementation: Uses Alert to notify users of errors, such as being offline or having issues retrieving data from AsyncStorage.


## 7. Load More Functionality:

Description: Allows users to load more headlines by pressing a button or automatically every 10 seconds.
Implementation: A HeaderButton component enables manual loading of more headlines. The setInterval function ensures that more headlines are fetched and displayed every 10 seconds.



# Dependencies

React Native: A framework for building native apps using React.
Redux: A predictable state container for JavaScript apps.
Redux Persist: Persist and rehydrate a redux store.
React Navigation: Routing and navigation for your React Native apps.
Async Storage: An asynchronous, unencrypted, persistent, key-value storage system for React Native.
