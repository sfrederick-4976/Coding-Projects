import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Sunset from '../../img/ImageCarousel/topViews.JPG';
import Beach from '../../img/ImageCarousel/beach.JPG';
import Dog from '../../img/ImageCarousel/buddy.JPG';
import Mountain from '../../img/ImageCarousel/mountains.JPG';
import Bus from '../../img/ImageCarousel/outterBus.JPG';
import Parasailing from '../../img/ImageCarousel/Parasailing.JPG';
import Inside from '../../img/ImageCarousel/thebus.JPG';
import Overlook from '../../img/ImageCarousel/overlook.JPG';
import makeStyles from "@material-ui/core/styles/makeStyles";

const items = [
    {
        img: Sunset,
        alt: 'Watching the sunset from the rooftop patio',
    },
    {
        img: Beach,
        alt: 'Views from the van waking up on the beach',
    },
    {
        img: Dog,
        alt: 'Dog enjoying the van',
    },
    {
        img: Mountain,
        alt: 'Swinging over to the mountains',
    },
    {
        img: Bus,
        alt: 'Our home from the outside',
    },
    {
        img: Parasailing,
        alt: 'The parasailing was incredible',
    },
    {
        img: Inside,
        alt: 'Our home from the inside',
    },
    {
        img: Overlook,
        alt: 'Overlooking a cliff is the best way to wake up',
    },

]

function CarouselComponent() {
    return (
        <Carousel
            next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
            prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
            >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
}

function Item(props)
{
    const styles = useStyles();
    return (
        <Paper className={styles.itemLayout}>
            <img src={props.item.img} alt={props.item.alt}/>
        </Paper>
    );
}

const useStyles = makeStyles({
    itemLayout: {
        width: "inherit",
        backgroundColor: "#EFEFEF",
    },

});

export default CarouselComponent;

