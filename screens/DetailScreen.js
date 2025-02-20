import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <View style={styles.container}>
      {product ? (
        <>
          <Image source={{ uri: product.images[0] }} style={styles.productImage} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Preço: ${product.price}</Text>
          <Text style={styles.discount}>Desconto: {product.discountPercentage}%</Text>
          <Text style={styles.stock}>Estoque: {product.stock}</Text>
          <Text style={styles.category}>Categoria: {product.category}</Text>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  discount: {
    fontSize: 16,
    color: '#e74c3c',
  },
  stock: {
    fontSize: 16,
    color: '#3498db',
  },
  category: {
    fontSize: 16,
    color: '#8e44ad',
  },
});