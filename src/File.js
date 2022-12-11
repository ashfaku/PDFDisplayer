
import React from 'react';
import { useNavigate, createSearchParams } from "react-router-dom";
const File = (props) => {
    var tab = props.tabbing;
    const filePath =  "./" + props.path;
    const navigate = useNavigate();
    var button = <button onClick = {function(e) {
        console.log(filePath); 

        const params = { fp: filePath };
        console.log(params);
        navigate({
          pathname: '/pdfs',
          search: `?${createSearchParams(params)}`,
        });
      }
    } 
    style = {{display: 'block', marginLeft: tab+50}}>{props.name}</button>;
    return <div>
        {button}
    </div>
};


export default File;