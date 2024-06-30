import { useEffect } from "react";

const useTitle = (title: string): void => {
    useEffect(() => {
        document.title = `Tea - ${title}`;
    }, [title]);
};

export default useTitle;
