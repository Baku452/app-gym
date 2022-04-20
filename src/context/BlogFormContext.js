import { createContext, useState } from 'react';

const BlogFormContext = createContext();

export function BlogFormContextProvider({ children }) {
    const [blogC, setBlogC] = useState({});

    return (
        <BlogFormContext.Provider value={{ blogC, setBlogC }}>
            {children}
        </BlogFormContext.Provider>
    );
};

export default BlogFormContext;