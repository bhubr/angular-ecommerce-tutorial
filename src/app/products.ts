export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 12',
    price: 849,
    description:
      'Meet the new iPhone 12 and iPhone 12 mini. 5G speed. A14 Bionic. Super Retina XDR display.',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC_SX466_.jpg'
  },
  {
    id: 2,
    name: 'OnePlus 9 Pro',
    price: 915,
    description:
      'The OnePlus 9 Pro showcases the stunning “Designed by OnePlus” vision.',
    image:
      'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/03/oneplus-9-pro-frandroid-2021.png?resize=580,580'
  },
  {
    id: 3,
    name: 'Galaxy A52 5G',
    price: 449,
    description: '',
    // 'The Galaxy A52 5G features a great 6.5-inch screen with fast 120Hz refresh rate, a capable 64-megapixel main camera.',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/517awgfxhaL._AC_SX425_.jpg'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
