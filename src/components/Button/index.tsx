export type ButtonType = {
  name: string;
  //   onClick: () => {};
  className: string;
};

const Button = ({ name, className = "" }: ButtonType) => {
  return <button className={className}>{name}</button>;
};

export default Button;
