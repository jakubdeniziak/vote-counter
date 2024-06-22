import { useEffect } from 'react';

const BeforeUnloadHandler = ({ isVoteSaved } : { isVoteSaved: any }) => {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (!isVoteSaved) {
                event.preventDefault();
                event.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isVoteSaved]);

    return null;
};

export default BeforeUnloadHandler;
