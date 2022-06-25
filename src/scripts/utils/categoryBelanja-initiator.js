import AnimaCareDbSource from '../data/animaCaredb-source';
import { createCardProductTemplate } from '../views/templates/template-creator';

const GetMakananKucing = async () => {
  const getMakananKucing = await AnimaCareDbSource.getMakananKucing();
  const containerListProduct = document.querySelector('#list-product');
  // containerListProduct.innerHTML = '<h1>Makanan Kucing</h1>';
  getMakananKucing.forEach((product) => {
    containerListProduct.innerHTML += (createCardProductTemplate(product));
  });
};

const GetMakananAnjing = async () => {
  const getMakananAnjing = await AnimaCareDbSource.getMakananAnjing();
  const containerListProduct = document.querySelector('#list-product');
  //   containerListProduct.innerHTML = '<h1>Makanan Anjing</h1>';
  getMakananAnjing.forEach((product) => {
    containerListProduct.innerHTML += (createCardProductTemplate(product));
  });
};

export { GetMakananKucing, GetMakananAnjing };
