import React from 'react'
import "./Buttons.scss";

export default function BaseBtn({
    className="",
    text="",
    icon=null,
    reverse=false
}) {

    const isOnlyIcon = text == null && icon;
    let iconClassName = isOnlyIcon ? "" : reverse ? "btn-icon-pdl" : "btn-icon-pdr";

    let componentList = [];

    if(icon){
        componentList.push(<span className={iconClassName} >{icon}</span>)
    }

    if(text){
        componentList.push(<span>{text}</span>)
    }

    if(reverse){
        componentList.reverse();
    }

    return (
        <button type="button" className={className}>
            {
                componentList.map((item, index) => {
                    return <React.Fragment key={index}>
                        {item}
                    </React.Fragment>
                } )
            }
            
        </button>
      )

//   return (
//     <button type="button" className={className}>
//         {
//             icon  ? <span className={iconClassName} >{icon}</span> : null
//         }
        
//         {
//             text ? <span>{text}</span> : null
//         }
        
//     </button>
//   )
}
