import React from 'react';
import File from './File.js';
import './Folder.css';

function getMaxHeight(e)
{
  return e.style.maxHeight.substring(0, e.style.maxHeight.indexOf('p'));
}
const Folder = (props) =>
{
    const rows = [];
    const files = [];

    var data = props.info;
    var tab = props.tab;
    let children = data.children;
   
    var firstChild = <div>
      <span style = {{marginLeft: tab}}>+</span>
      <button onClick={function(e) {
          e.target.classList.toggle("active");
          var secondChild = e.target.parentElement.parentElement.children[1];
          //console.log(secondChild.style.maxHeight);
          if (secondChild.style.maxHeight)
          {
            e.target.parentElement.parentElement.children[0].children[0].innerHTML = "+";
            var scrollHeight = secondChild.scrollHeight;
            secondChild.style.maxHeight = null;
            while (secondChild.parentElement)
            {
              secondChild = secondChild.parentElement;
              if (secondChild.style.maxHeight)
              {
                secondChild.style.maxHeight = (getMaxHeight(secondChild) - scrollHeight) + "px";
                scrollHeight = secondChild.style.maxHeight;
              }
            }
          }
          else
          {
            e.target.parentElement.parentElement.children[0].children[0].innerHTML = "-";
            scrollHeight = secondChild.scrollHeight;
            secondChild.style.maxHeight = scrollHeight + "px";
            while (secondChild.parentElement)
            {
              secondChild = secondChild.parentElement;
              if (secondChild.style.maxHeight)
              {
                secondChild.style.maxHeight = (getMaxHeight(secondChild) + scrollHeight) + "px";
                scrollHeight = secondChild.style.maxHeight;
              }
            }
          }
        }

      } 
      style = {{ display: 'inline-block', cursor: 'pointer', color: 'red'}}>{data.name.replaceAll("_", " ")}</button>
    </div>;
    for (let elem in children)
    {
      if (children[elem].children != null)
      {
        const newTab = tab + 50;
        rows.push(<Folder info = {children[elem]} tab = {newTab} routes = {props.routes} />)
      }
      else
      {
        var name = children[elem].name;
        if (name.substr(name.length - 3) === 'pdf')
        {
          const t = tab + 50;
          files.push(<File path = {children[elem].path} name = {name.replaceAll("_", " ")} tabbing = {t-50} />);
          var route = "/" + name;
          props.routes.push(route);
         // console.log(props.routes);
        }
        else
          files.push(<div style = {{marginLeft: tab + 50}}>{name.replaceAll("_", " ")}</div>);
      }
    }
    for (let elem in files)
      rows.push(files[elem]);
    return (<div>
        {firstChild}
        <div className = "secondChild">
        {rows}
        </div>
  
    </div>);
}

export default Folder;