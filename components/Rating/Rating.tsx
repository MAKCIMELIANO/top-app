"use client";

import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import {Star} from "./Star";
import cn from "classnames";
import { useState } from "react";

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): React.ReactElement => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleClick = (index: number) => {
    if (isEditable) {
      setRating(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<SVGSVGElement>, index: number) => {
    if (isEditable) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setRating(index + 1);
      }
    }
  };

  const stars = Array.from({ length: 5 }).map((_, i) => {
    const isFilled = i < (hoverRating || rating);
    const starClassName = cn(styles.star, {
      [styles.filled]: isFilled,
    });

    const starProps: React.SVGProps<SVGSVGElement> = {
      className: starClassName,
      onClick: (e) => { e.stopPropagation(); handleClick(i); },
      onMouseEnter: () => isEditable && setHoverRating(i + 1),
      onMouseLeave: () => setHoverRating(0),
    };

    if (isEditable) {
      starProps.onKeyDown = (e) => handleKeyDown(e, i);
      starProps.role = 'button';
      starProps['aria-label'] = `Rate ${i + 1} out of 5`;
      starProps.tabIndex = 0;
    }

    return <Star key={i} {...starProps} />;
  });

  const containerClassName = cn(styles.rating, className, {
    [styles.editable]: isEditable,
  });

  const containerProps: React.HTMLAttributes<HTMLDivElement> = { ...props };
  if (!isEditable) {
    containerProps.role = 'img';
    containerProps['aria-label'] = `Rating: ${rating} out of 5`;
  }

  return (
    <div className={containerClassName} {...containerProps}>
      {stars}
    </div>
  );
};
