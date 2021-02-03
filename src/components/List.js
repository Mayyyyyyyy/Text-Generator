const List = (props) => {
    const {paras,tag,includeHtml} = props;
    return ( 
        <div className="list">
          {paras.map((para,index)=>{
              return <div id={index} className="listItem">
                  
                  {index + 1}.  { includeHtml ==='Yes'
                      ? `<${tag}>${para}</${tag}>`
                      : `${para}`
                      }
                     </div>
          })}
        </div>
     );
}
 
export default List;