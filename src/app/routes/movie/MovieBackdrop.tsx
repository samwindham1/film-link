import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getMovieBackdropUrl } from '@api';
import FastAverageColor from 'fast-average-color';

import './MovieBackdrop.css';

export const MovieBackdrop = ({ backdropPath }: { backdropPath: string }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(null);
    const [backdropLoading, setBackdropLoading] = useState(true);
    const fac = new FastAverageColor();

    useEffect(() => {
        const fullBackdropUrl = getMovieBackdropUrl(backdropPath);
        if (fullBackdropUrl) {
            fac.getColorAsync(fullBackdropUrl).then((color) => {
                setBackgroundColor(color.rgba);
            });
        }
    }, []);

    return (
        <div className='movie__backdrop' style={{ backgroundColor }}>
            <img
                src={getMovieBackdropUrl(backdropPath)}
                className={classNames('movie__backdrop__image', { loading: backdropLoading })}
                onLoad={() => setBackdropLoading(false)}
            />
            <div
                className='movie__backdrop__overlay'
                style={{
                    background: `linear-gradient(90deg, ${backgroundColor} calc((100vw - 1400px) / 2), transparent calc(100vw - 1400px), transparent 1400px, ${backgroundColor} calc(100vw - (100vw - 1400px) / 2))`
                }}
            ></div>
        </div>
    );
};
