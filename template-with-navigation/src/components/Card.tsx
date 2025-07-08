// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import { Card as PaperCard, CardProps as PaperCardProps, Title, Paragraph } from 'react-native-paper';

export type CardProps = PaperCardProps & {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

const StyledCard = styled(PaperCard)`
  border-radius: 20px;
  margin-vertical: 12px;
  background-color: #fff;
  elevation: 4;
`;

export const Card: React.FC<CardProps> = ({ title, description, image, children, ...props }) => (
  <StyledCard {...props}>
    {image && <PaperCard.Cover source={{ uri: image }} />}
    {(title || description) && (
      <PaperCard.Content>
        {title && <Title>{title}</Title>}
        {description && <Paragraph>{description}</Paragraph>}
      </PaperCard.Content>
    )}
    {children}
  </StyledCard>
);