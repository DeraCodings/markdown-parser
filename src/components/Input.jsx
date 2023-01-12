
function Input(props) {
    const { inputValue, handleInput } = props;

    return (
        <div className='input-field'>
            <textarea name="input" id="editor" cols="30" rows="10" value={inputValue} onChange={handleInput}></textarea>
        </div>
    )
}

export default Input