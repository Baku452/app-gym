import { createContext, useState } from 'react';

const FormContext = createContext();

export function FormContextProvider({ children }) {
    const [blogC, setBlogC] = useState({});
    const [courseC, setCourseC] = useState({});

    return (
        <FormContext.Provider value={{ blogC, setBlogC, courseC, setCourseC }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;