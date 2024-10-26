// copied from gh issue @ https://github.com/shadcn-ui/ui/issues/4231#issuecomment-2439165024

import { useState, useEffect } from 'react';

const useResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth - 150,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth - 150,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
};

export default useResize;