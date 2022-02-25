import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getMovieBackdropUrl, getMoviePosterUrl } from '@api';
import FastAverageColor from 'fast-average-color';

import './MovieBackdrop.css';

export const MovieBackdrop = ({ backdropPath, posterPath }: { backdropPath: string; posterPath: string }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(null);
    const [backdropLoading, setBackdropLoading] = useState(true);
    const fac = new FastAverageColor();

    useEffect(() => {
        fac.getColorAsync(getMoviePosterUrl(posterPath)).then((color) => {
            setBackgroundColor(color.rgba);
        });
    }, []);

    return (
        <div className='movie__backdrop' style={{ backgroundColor }}>
            <img
                src={getMovieBackdropUrl(backdropPath)}
                className={classNames('movie__backdrop__image', { loading: backdropLoading })}
                onLoad={() => setBackdropLoading(false)}
            />
        </div>
    );
};
