import { useContext, useCallback } from 'react';
import { BlogFormContext } from 'context/BlogFormContext'

export default function blogForm() {
    const { blogC, setBlogC } = useContext(BlogFormContext);
}