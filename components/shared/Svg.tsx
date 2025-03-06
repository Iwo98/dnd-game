export interface SvgProps {
  src: string;
  className?: string;
  viewBox: string;
}

const Svg = ({ src, className, viewBox }: SvgProps) => {
  return (
    <svg
      className={className}
      dangerouslySetInnerHTML={{ __html: src }}
      viewBox={viewBox}
    ></svg>
  );
};

export default Svg;
