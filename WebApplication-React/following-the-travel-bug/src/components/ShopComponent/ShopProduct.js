import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ShopProduct from '../../img/shopProduct.JPG';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "15px"
    },
});

export default function ImgMediaCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Roof tent Tepuis HyBox"
                    height="140"
                    image={(ShopProduct)}
                    title="Roof tent Tepuis HyBox"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thule Roof Tent
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Versatile design, converts the two-person rooftop tent into a spacious luggage rack
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={'/product'}><Button size="medium" color="primary">
                    Learn More
                </Button></Link>
                <Button size="small" color="primary">
                    $3,999.00
                </Button>
            </CardActions>
        </Card>
    );
}
