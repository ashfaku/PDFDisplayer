WIP React Router application to display pdfs in a natural manner, instead of just flat text on a screen <br> <br>

When running locally  | When hosting to gh-pages
--------------------  | ------------------------
Port is 3000, unless you manually change it somehow          | Use HashRouter instead of BrowserRouter
Add ```"homepage": "http://localhost:<port>/#" to package.json``` | Add ```"homepage": "https://<username>.github.io/<repo-name>/#"``` to package.json


Use ```window.location.hash``` instead of ```window.location.search``` when trying to get query parameters, and parse them like you would any string with .split() 


Notes for myself) <br>
    
        
         <br>
        
        ```npm start``` to run <br>
        Add ```"homepage": "https://<username>.github.io/<repo-name>/#"``` to package.json <br>
        Add ```"predeploy": "npm run build", \n "deploy": "gh-pages -d build"``` to scripts in package.json <br>
        ```npm run deploy``` to deploy to gh-pages branch, make sure the repository's settings is hosting from gh-pages and check Actions tab to see when it finishes (takes a while if you have a lot of files) <br>
