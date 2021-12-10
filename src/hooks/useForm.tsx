import { useState } from "react"


const useForm = <T extends Object> (initState: T) => {
    
    const [state, setstate] = useState(initState);

    const onChange = (value: string, form: keyof T) => {
        setstate({
            ...state,
            [form]: value
        })
    }

    const resetForm = () => {
        setstate( initState );
    }

    return {
        ...state,
        onChange,
        resetForm,
    }
}

export default useForm
