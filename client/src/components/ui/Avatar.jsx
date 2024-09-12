import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Avatar = ({ size = "medium", className = "", children }) => {
  const avatarSizes = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10", 
  };

  return (
    <div className={twMerge("relative rounded-full overflow-hidden", avatarSizes[size], className)}>
      {children}
    </div>
  );
};

export const AvatarImage = ({ src, alt = "", className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () =>  setIsLoaded(true);
  const handleImageError = () => setHasError(true);

  return (
    <>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={twMerge(
            "absolute top-0 left-0 z-[2] object-cover aspect-square w-full h-full transition-opacity",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}
    </>
  );
};

export const AvatarFallback = ({ children, className = "" }) => {
  return (
    <div className={twMerge("absolute top-0 left-0 z-[1] flex items-center justify-center aspect-square w-full h-full text-sm font-medium bg-gray-200", className)}>
      {children}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

AvatarFallback.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
