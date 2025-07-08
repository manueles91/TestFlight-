// @ts-ignore
import styled from 'styled-components/native';
// @ts-ignore
import { ScrollView, View } from 'react-native';
import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { List } from '../components/List';
// @ts-ignore
import { Text, Title } from 'react-native-paper';

const HeroSection = styled(View)`
  background-color: #2d1e2f;
  padding: 32px 16px 24px 16px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  align-items: center;
`;

const FeaturedSection = styled(View)`
  margin-top: 24px;
  padding: 0 16px;
`;

type FeaturedService = {
  title: string;
  description: string;
  image: string;
  price: string;
};

type Promotion = {
  title: string;
  description: string;
  image: string;
};

const featuredServices: FeaturedService[] = [
  {
    title: 'Luxury Facial',
    description: 'Rejuvenate your skin with our signature facial treatment.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    price: '$120',
  },
  {
    title: 'Premium Hair Styling',
    description: 'Get a glamorous look for any occasion.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: '$90',
  },
];

const promotions: Promotion[] = [
  {
    title: 'Summer Glow Package',
    description: 'Book now and get 20% off select services!',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={{ backgroundColor: '#f7f5fa' }}>
      <HeroSection>
        <Title style={{ color: '#fff', fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}>
          Welcome to Luxe Beauty
        </Title>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 16, textAlign: 'center' }}>
          Experience the art of beauty and relaxation at our premium salon.
        </Text>
        <Button
          variant="primary"
          onPress={() => navigation.navigate('Services')}
          style={{ width: 200 }}
        >
          Book an Appointment
        </Button>
      </HeroSection>
      <FeaturedSection>
        <Title style={{ fontSize: 22, marginBottom: 12 }}>Featured Services</Title>
        <List
          data={featuredServices}
          renderItem={({ item }: { item: FeaturedService }) => (
            <Card
              title={item.title}
              description={`${item.description}  •  ${item.price}`}
              image={item.image}
              onPress={() => navigation.navigate('Services')}
            />
          )}
        />
        <Title style={{ fontSize: 22, marginVertical: 16 }}>Promotions</Title>
        <List
          data={promotions}
          renderItem={({ item }: { item: Promotion }) => (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => navigation.navigate('Services')}
            />
          )}
        />
      </FeaturedSection>
    </ScrollView>
  );
}