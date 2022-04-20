import { useContext, useCallback } from 'react';
import { FormContext } from 'context/FormContext'

export default function form() {
    const { blogC, setBlogC, courseC, setCourseC } = useContext(FormContext);
}