import Repository from 'repositories/factory/RepositoryFactory';
const ProductsRepository = Repository.get('product');

export const fetchProducts = async () => {
  try {
    const { data } = await ProductsRepository.get({
      business_object_type: 'product',
    });
    return data;
  } catch (err) {
    console.error('Error get products: ', err);
    return;
  }
};
