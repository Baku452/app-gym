import UserRepository from '../UserRepository';
import BusinessObjectRepository from '../BusinessObjectRepository';
import SessionRepository from '../SessionRepository';
import UploadRepository from '../UploadRepository';

const repositories = {
  user: UserRepository,
  businessObject: BusinessObjectRepository,
  session: SessionRepository,
  upload: UploadRepository,
  //mas repos
};

const factory = {
  get: name => repositories[name],
};

export default factory;
