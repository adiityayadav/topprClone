import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';

const data = [
  { title: 'Card 1', content: 'This is the content of card 1.' },
  { title: 'Card 2', content: 'This is the content of card 2.' },
  { title: 'Card 3', content: 'This is the content of card 3.' },
  { title: 'Card 4', content: 'This is the content of card 4.' },
  { title: 'Card 5', content: 'This is the content of card 5.' },
];

const CardGrid = () => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.title}>
          <Card>
            <CardContent>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
