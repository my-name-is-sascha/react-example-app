const Link = ({ href, className, text, target = '_self', rel = undefined }) => {
  return (
    <a href={href} className={className} target={target} rel={rel}>
      {text}
    </a>
  );
};

export default Link;
