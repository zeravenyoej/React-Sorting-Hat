import React from 'react'

const Form = (props)=> {
    return(
        <div>
            <form>
                <label>
                    1. Are you brave?
                    <input
                        type='text'
                        name='text'
                        placeholder='type yes or no'
                    /><pre/>
                </label>
                <label>
                    2. Are you studious?
                    <input
                        type='text'
                        name='text'
                        placeholder='type yes or no'
                    /> <pre/>
                </label>
                <label>
                    3. Are you witty?
                    <input
                        type='text'
                        name='text'
                        placeholder='type yes or no'
                    /> <pre/>
                </label>
                <label>
                    4. Are you resourceful?
                    <input
                        type='text'
                        name='text'
                        placeholder='type yes or no'
                    /> <pre/>
                </label>
                <label>
                    5. Are you ambitious?
                        <input
                        type='text'
                        name='text'
                        placeholder='type yes or no'
                        /><pre/>
                </label>
                <label>
                    6. Are you witty?
                    <input
                        type='text'
                        name='text'
                        placeholder='type yes or no'
                    /> <pre/>
                </label>
                <pre/>
                <button>Enter</button> <pre/>
                <button onClick={()=>props.history.push('/')}>Go Back</button>
            </form>
        </div>
    )
};


export default Form;