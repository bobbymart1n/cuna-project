This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Notes

I've gone ahead and left some basic info on create-react-app here just in case
others haven't used it before. Things to note are:

- serviceWorker is pre-baked in CRA
- test packages are also pre-baked, but I unfortunately didn't have time to
  implement them

### Project Notes

- I went ahead and made a really simple mockup that you can view here
  https://www.figma.com/file/NJSOHys3TWpXtI0ZyYXmxH/CUNA-Project?node-id=0%3A1
  My goal with this was just to get a very basic idea of what I wanted the
  landing page to look like.
- I made a call to use a reducer and not have global app state for the landing
  page form. This was purely based on the fact that we didn't need to reuse this
  data later based on the challenge spec. If we did however want to use this
  data later, I would use React Context to hold this data for future use.
- In the `NewAccount` component, I could DRY up some of the code there by
  creating a length check function to handle the `hasError` prop as its
  changing.

## Available Scripts

In the project directory, you can run:

### `yarn start || npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `yarn build || npm run build`

Builds the project into distributable code thought I recommend viewing this
project using `npm start`. If you plan on building the project, after running
`npm run build`, there will be detailed instructions on how to run the built
version in your terminal

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
