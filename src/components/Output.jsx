import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function Output(props) {

    const { outputValue } = props;

    return (
        <div className='output-field'>
            <div id="preview">
                <ReactMarkdown
                    children={outputValue}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code: ({node,...props}) => <code style={{backgroundColor: '#6c757d', color: '#f8f9fa', padding: '0 .5rem' }} {...props}></code>,
                        '\n': <br />
                    }}
                />
            </div>
        </div>
    )
}

export default Output