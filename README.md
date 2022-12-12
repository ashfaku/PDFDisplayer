WIP React Router application to display pdfs in a natural manner, instead of just flat text on a screen

Notes for myself) <br>
    When running locally)
        Port is 3000, unless you manually change it somehow
        Add ```"homepage": "http://localhost:<port>/#" to package.json```
        Use HashRouter instead of BrowserRouter 
        Use ```window.location.hash``` instead of ```window.location.search``` when trying to get query parameters, and parse them like you would any string with .split()
        ```npm start``` to run 
    When hosting to gh-pages)
        Add ```"homepage": "https://<username>.github.io/<repo-name>/#"``` to package.json
        Add ```"predeploy": "npm run build", \n "deploy": "gh-pages -d build"``` to scripts in package.json
        ```npm run deploy``` to deploy to gh-pages branch, make sure the repository's settings is hosting from gh-pages and check Actions tab to see when it finishes (takes a while if you have a lot of files)
