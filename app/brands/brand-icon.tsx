type BrandIconProps = {
  src: string;
};

export function BrandIcon({ src }: BrandIconProps) {
  return (
    <img
      className="brand-icon"
      src={src}
      alt=""
      aria-hidden="true"
      width="76"
      height="76"
      loading="lazy"
      decoding="async"
      draggable="false"
    />
  );
}
