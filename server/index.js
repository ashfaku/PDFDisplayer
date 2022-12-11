const dirTree = require("directory-tree");
const fs = require('fs');
const express = require('express')
const app = express()
const port = process.env.port || 5001;
//console.log(dirTree("./../client/public/PDFs"));
const trees = dirTree('./PDFs');
app.get('/express_backend', (req, res) => { 
    res.send({ files: trees });
});

fs.writeFile('json.json', JSON.stringify(trees), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/*const makeNew = (tree) =>
{
 // console.log(tree.path);
//  console.log(String(tree.path).replaceAll(' ', '_'));
  var path = String(tree.path).replaceAll(' ', '_');
 // console.log(typeof path);
  fs.rename(tree.path, path, () => {
  //  console.log("\nFile Renamed!\n");
  });
  for (let elem in tree.children)
  {
    if (String(tree.children[elem].path).replaceAll(" ", "_").includes("Binghamton"))
      console.log(String(tree.children[elem].path).replaceAll(" ", "_"));
    if (tree.children[elem].children == null)
    {
      fs.rename(tree.children[elem].path, String(tree.children[elem].path).replaceAll(" ", "_"), () => {
   //     console.log("\nFile Renamed!\n");
    
      // List all the filenames after renaming
      // getCurrentFilenames();
      });
    }
    else
    {
      makeNew(tree.children[elem]);
    }
  }
}
makeNew(trees);*/


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});