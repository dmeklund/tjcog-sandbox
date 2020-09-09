# Resources

Latest wireframes: https://drive.google.com/file/d/11E938iN4gxTgGaYpIk32mbVQVoOk9nZl/view?usp=sharing

Google drive (read-only link, request to be added if write access is needed): https://drive.google.com/drive/folders/1L-IY7Tfehx4wDcOX87VfWJGJYvJRe0bX?usp=sharing

Sample GIS data: https://drive.google.com/file/d/17T1Q14c87z508LDFTkOPin6I0nhqJ9S1/view?usp=sharing

The `develop` branch is automatically deployed to https://tjcog-sandbox2.herokuapp.com/

# Generating GIS JSON Files

GIS data is stored in the GeoJSON format. Given an ESRI shapefile, you can convert it into GeoJSON format with the following command:

`ogr2ogr -f GeoJSON -t_srs crs:84 JohnstonLBAR_110519.json JohnstonLBAR_110519.shp`

`ogr2ogr` is included in the GDAL (Geospatial Data Abstraction Library) package.

# Generic create-react-app Instructions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
