This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Job Hunter App
Purpose of App is to help users (job hunters) track jobs they're applying to, interviewing for, ruling out, etc. 

## User Scenarios

### Users/ End Client Consumers

* As a user I want my job hunting data to be secure and private

* As a user I want to see all the jobs I've applied to and sort them by various options (data applied, status, etc.).

* As a user I want to add new jobs to my list of jobs I've applied to at any time.

* As a user I want to see details about any job in my job list (status, data applied, source, etc.)

#### Future State:
* As a user I want advice about how to improve my resume, my linked in profile, my interviewing skills. 

* As a user I want to be able to get support from other job hunters.

* As a user I might want to see job postings for my area/career/field/location.

* As a user I want to see what a resonable salary is for a given role in a given location and company based on my current experience.

### Admins

* As an admin I want to easily reset (or not even have to be involved in) passwords/access to accounts.

* As an admin I want to easily see traffic volume for each page, action.

* As an admin, I want to get alerts when any part of the system is performing suboptimally (SLAs to be determined later).

* As an admin, I want to be able to regularly test, update and verify security measures.

### Developers/Operations
* As a developer I want to be able to see current and future schema for all API functions and system design.

* As a developer I want to be able to get alerts when any part of the system (front end back end  etc) is not operating as expected (SLAs to be determined later).

* As a developer I want to understand which API calls are and are not being used (backend API call performance data).

* As a developer I want an easy way to maintain and query data while keeping it secure from most parties on the development team (restricted access).

## Site Structure Idea
See [Site Map/ User Flow](./UserFlowSiteMap.pdf)

See [System design overview](.SystemDesignOverview.pdf)

## Planned Technologies to be used:
* React
* Typescript
* JavaScript
* GraphQL
* AgGrid
* Azure
* Azure Lambda
* Azure DevOps
* Github
* VSCode