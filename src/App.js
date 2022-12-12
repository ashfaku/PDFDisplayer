//import './App.css';
import React from 'react'; //{ useState, useEffect } from 'react';
import Folder from './Folder.js';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PDFPage from './PDFPage.js';
import data from './json.json';
// https://github.com/PSPDFKit-labs/react-pdf-demo -> sample react-pdf demo
/*
async function callBackendAPI() {
  const response = await fetch('./express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};
function generateHTML(data, tab)
{
  const rows = [];
  const files = [];
  var firstChild = <div onClick={function(e) {
    var child = e.target.parentElement.children[1];
    if (child.style.display === 'none')
      child.style.display = 'block';
    else
      child.style.display = 'none';
  
  }} REQUEST ACCESS
  style = {{ display: 'inline-block', cursor: 'pointer', color: 'red', marginLeft: tab}}>{data.name}</div>;
 // parent.appendChild(firstChild);
  //rows.push(<div style = {{ color: 'red', marginLeft: tab}}>{data.name}</div>);
  var children = data.children;
  for (let elem in children)
  {
    if (children[elem].children != null)
      rows.push(generateHTML(children[elem], tab + 50));
    else
    {
      var name = children[elem].name;
      if (name.substr(name.length - 3) === 'pdf')
      {
        var button = <button onClick = {function(e) {
            const filePath = children[elem].path;
            
          }
        } 
        style = {{display: 'block', marginLeft: tab + 50}}>{name}</button>;
       // button.setAttribute('path', children[elem].path);
        files.push(button);
      }
      else
        files.push(<div style = {{marginLeft: tab + 50}}>{name}</div>);
    }
  }
  for (let elem in files)
    rows.push(files[elem]);
  return (<div>
      {firstChild}
      <div style = {{display: 'none'}}>{rows}</div>

  </div>);
}
*/
function App() {
//  const [files, setFiles] = useState([]);
  var routes = [];
  var folder = <Folder info = {data} tab = {0} routes = {routes} />;
  
 /* useEffect(() => {
    console.log(data);
    setFiles(folder);
    callBackendAPI().then((files) => 
    {
      var children = files.files;
      var folder = <Folder info = {children} tab = {0} routes = {routes} />;
      setFiles(folder);
     
      console.log(data);
    })
  }, []);
  */
  return ( 
    <Router>
        <Routes>
            <Route exact path = "/" element = {<div>{folder}</div>} />
            <Route exact path = "/pdfs" element = {<PDFPage />} />
            <Route element = {<div>Not found</div>} />
        </Routes>
    </Router>
  );
}
export default App;
