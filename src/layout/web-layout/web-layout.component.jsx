import { WebHeader, WebFooter } from 'components/index.js';

const LayoutWeb = props => {
  return (
    <>
      <WebHeader />
      {props.children}
      <WebFooter />
    </>
  );
};

export { LayoutWeb };
