WIP React Router application to display pdfs in a natural manner, instead of just flat text on a screen <br> <br>

When running locally  | When hosting to gh-pages
--------------------  | ------------------------
Port is 3000, unless you manually change it somehow          | Add ```"predeploy": "npm run build",``` <br /> ```"deploy": "gh-pages -d build"``` to scripts in package.json
Add ```"homepage": "http://localhost:<port>/#" to package.json``` | Add ```"homepage": "https://<username>.github.io/<repo-name>/#"``` to package.json
```npm start``` to run |  ```npm run deploy``` to deploy to gh-pages branch, make sure the repository's settings is hosting from gh-pages and check Actions tab to see when it finishes (takes a while if you have a lot of files)
You can use BrowserRouter's ```window.location.search``` and use ```map = new URLSearchParams(window.location.search)``` to get query parameters, and use ```map.get("<query_param_name>")``` like a HashMap | You have to use HashRouter's ```window.location.hash``` and parse it for query parameters like a regular string in code
    