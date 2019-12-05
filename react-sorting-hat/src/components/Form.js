import React, {useState} from 'react'

const Form = (props)=> {

    const [formValue, setFormValue] = useState({
        brave: '',
        studious: '',
        witty: '',
        resourceful: '',
        ambitious: '',
        hardWorking: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormValue({...formValue, [e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormValue({
            brave: '',
            studious: '',
            witty: '',
            resourceful: '',
            ambitious: '',
            hardWorking: '',
        })
    }

    return(
        <div>
            <form>
                <label>
                    1. Are you brave?
                    <input
                        type='text'
                        name='brave'
                        placeholder='type yes or no'
                        value={formValue.brave}
                        onChange={event=>handleChange(event)}
                    /><pre/>
                </label>
                <label>
                    2. Are you studious?
                    <input
                        type='text'
                        name='studious'
                        placeholder='type yes or no'
                        value={formValue.studious}
                        onChange={event=>handleChange(event)}
                    /> <pre/>
                </label>
                <label>
                    3. Are you witty?
                    <input
                        type='text'
                        name='witty'
                        placeholder='type yes or no'
                        value={formValue.witty}
                        onChange={event=>handleChange(event)}
                    /> <pre/>
                </label>
                <label>
                    4. Are you resourceful?
                    <input
                        type='text'
                        name='resourceful'
                        placeholder='type yes or no'
                        value={formValue.resourceful}
                        onChange={event=>handleChange(event)}
                    /> <pre/>
                </label>
                <label>
                    5. Are you ambitious?
                        <input
                        type='text'
                        name='ambitious'
                        placeholder='type yes or no'
                        value={formValue.ambitious}
                        onChange={event=>handleChange(event)}
                        /><pre/>
                </label>
                <label>
                    6. Are you hard working?
                    <input
                        type='text'
                        name='hardWorking'
                        placeholder='type yes or no'
                        value={formValue.hardWorking}
                        onChange={event=>handleChange(event)}
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