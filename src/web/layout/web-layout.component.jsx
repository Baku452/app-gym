import WebHeader from '../components/organism/web-header/web-header.component';
import WebFooter from '../components/organism/web-footer/web-footer.component';

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
