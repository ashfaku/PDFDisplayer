WIP React Router application to display pdfs in a natural manner, instead of just flat text on a screen <br> <br>

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell


Notes for myself) <br>
    When running locally.
        Port is 3000, unless you manually change it somehow <br>
        Add ```"homepage": "http://localhost:<port>/#" to package.json``` <br>
        Use HashRouter instead of BrowserRouter <br>
        Use ```window.location.hash``` instead of ```window.location.search``` when trying to get query parameters, and parse them like you would any string with .split() <br>
        ```npm start``` to run <br>
    When hosting to gh-pages) <br>
        Add ```"homepage": "https://<username>.github.io/<repo-name>/#"``` to package.json <br>
        Add ```"predeploy": "npm run build", \n "deploy": "gh-pages -d build"``` to scripts in package.json <br>
        ```npm run deploy``` to deploy to gh-pages branch, make sure the repository's settings is hosting from gh-pages and check Actions tab to see when it finishes (takes a while if you have a lot of files) <br>
