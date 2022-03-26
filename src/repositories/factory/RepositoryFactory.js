import UserRepository from '../UserRepository';
import BusinessObjectRepository from '../BusinessObjectRepository';
import SessionRepository from '../SessionRepository';

const repositories = {
  user: UserRepository,
  businessObject: BusinessObjectRepository,
  session: SessionRepository,
  //mas repos
};

const factory = {
  get: name => repositories[name],
};

export default factory;
