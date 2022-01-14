import WebHeader from '../components/molecules/web-header/web-header.component';
import WebFooter from '../components/molecules/web-footer/web-footer.component';

const LayoutWeb = props => {
  return (
    <>
      <WebHeader />
      {props.children}
      <WebFooter />
    </>
  );
};

export default LayoutWeb;
