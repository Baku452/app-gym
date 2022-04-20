import UserRepository from '../UserRepository';
import BusinessObjectRepository from '../BusinessObjectRepository';
import SessionRepository from '../SessionRepository';
import UploadRepository from '../UploadRepository';
import ProductRepository from '../ProductsRepository';

const repositories = {
  user: UserRepository,
  businessObject: BusinessObjectRepository,
  session: SessionRepository,
  upload: UploadRepository,
  product: ProductRepository,
};

const factory = {
  get: name => repositories[name],
};

export default factory;
