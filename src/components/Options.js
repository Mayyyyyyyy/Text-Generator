import { CopyToClipboard } from 'react-copy-to-clipboard';

const Options = (props) => {
    const {
        inputValue,
        setInputValue,
        tag ,
        setTag,
        includeHtml ,
        setIncludeHtml ,
        copied ,
        setCopied,
        paras
    } = props;

    setTimeout(()=>{
      setCopied(false);
    },2000)
   

    return ( 
        <div className="options">
           <table>
                <tr>
                    <td>Paragraphs:</td>
                    <td>Tag:</td>
                    <td>Include Html:</td>
                </tr>
                <tr>
                    <td>
                        <input 
                            value={inputValue}
                            onChange={(e)=>setInputValue(e.target.value)}
                            type="number"
                            min="1"
                        />
                    </td>
                    <td>
                        <select value={tag} onChange={(e)=>setTag(e.target.value)}>
                            <option value="h1">h1</option>
                            <option value="h2">h2</option>
                            <option value="h3">h3</option>
                            <option value="h4">h4</option>
                            <option value="p">p</option>
                            <option value="span">span</option>
                        </select>
                    </td>
                    <td>
                        <select value={includeHtml} onChange={(e)=>setIncludeHtml(e.target.value)}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                    <td>
                    <CopyToClipboard
                        text={paras.map(para => includeHtml ? `<${tag}>${para}</${tag}>` : para)}
                        onCopy={() => setCopied(true)}>
                        <button className="clipboard">{copied ? 'Copied' : 'Copy to clipboard'}</button>
                    </CopyToClipboard>
                    </td>
                </tr>
           </table>
        </div>
     );
}
 
export default Options;


