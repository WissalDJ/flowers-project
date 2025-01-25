export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const produits = [
        { 
          id: 1, 
          title: 'Bouquet Éclatant', 
          image: '/images/f9.webp', 
          category: 'Romantic', 
          description: 'A vibrant bouquet perfect for expressing love and passion.', 
          price: 100 
        },
        { 
          id: 2, 
          title: 'Rose', 
          image: '/images/f14.png', 
          category: 'Spring', 
          description: 'A soft and delicate bouquet that captures the essence of spring.', 
          price: 80 
        },
        { 
          id: 3, 
          title: 'Bouquet Soleil Éblouissant', 
          image: '/images/f10.jpg', 
          category: 'Summer', 
          description: 'A radiant bouquet that brings the warmth of summer to any occasion.', 
          price: 130 
        },
        { 
          id: 4, 
          title: 'Bouquet Élégance Naturelle', 
          image: '/images/f11.jpg', 
          category: 'Elegant', 
          description: 'A sophisticated bouquet for those who appreciate timeless beauty.', 
          price: 340 
        },
        { 
          id: 5, 
          title: 'Yellow Rose & Chamomile Bouquet', 
          image: '/images/f13.jpg', 
          category: 'Modern', 
          description: 'A modern and balanced bouquet that complements any setting.', 
          price: 120 
        },
        { 
          id: 6, 
          title: 'Wedding Bouquets & Flower Arrangements', 
          image: '/images/f7.jpeg', 
          category: 'Mystery', 
          description: 'A captivating bouquet that adds a touch of mystery to your special moments.', 
          price: 260 
        },
        { 
          id: 7, 
          title: 'Bouquet with Roses and a Engagement Ring', 
          image: '/images/flower5.jpeg', 
          category: 'Fresh', 
          description: 'A refreshing bouquet that brings the freshness of a morning garden.', 
          price: 300 
        },
        { 
          id: 8, 
          title: 'Art Deco Flowers', 
          image: '/images/f16.jpg', 
          category: 'Calm', 
          description: 'A peaceful bouquet designed to bring calm and tranquility to your space.', 
          price: 100 
        },
      ];
      dispatch({
        type: GET_PRODUCTS,
        payload: produits,
      });
    } catch (error) {
      console.error('Erreur de récupération des produits:', error);
    }
  };
};
