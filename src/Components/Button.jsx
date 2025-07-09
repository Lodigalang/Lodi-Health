function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      aria-controls={props.controls}
      aria-expanded={props.expand}
      onClick={props.onClick}
    >
      {props.teks}
    </button>
  );
}

export default Button;
