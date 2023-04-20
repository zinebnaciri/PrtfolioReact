import React from 'react';


import Typography from '@mui/material/Typography';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default function Education() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <div>
        <Typography variant="h1" component="h1" sx={{ color: 'primary.main', textTransform: 'uppercase' }}>
        Experiences
      </Typography>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            </div>
    );
}