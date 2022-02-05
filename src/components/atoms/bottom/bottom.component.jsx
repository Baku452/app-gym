import styles from './bottom.module.scss';

const Button = ({ children, color = 'btn-primary', isFill, ...otherProps }) => (
  <button
    className={`${isFill ? 'fill' : 'outlet'} btn ${color} `}
    {...otherProps}>
    {children}
  </button>
);

export default Button;
