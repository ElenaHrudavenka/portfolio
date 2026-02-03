import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const LazySection = ({children}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '100px',
    });
    
    return (
        <div ref={ref}>
            {inView ? (
                <Suspense fallback={<div style={{width: '80%'}}></div>}>
                    {children}
                </Suspense>
            ) : null}
        </div>
    )
};

export default LazySection;
