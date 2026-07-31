type BrandIconProps = {
  name: string;
  src: string;
  ariaLabel: string;
};

export function BrandIcon({ name, src, ariaLabel }: BrandIconProps) {
  return (
    <span className="brand-icon" role="img" aria-label={ariaLabel} title={name}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width="128"
        height="128"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
