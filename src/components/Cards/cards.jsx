/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

const Cards = ({titulo, descricao, url}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <div className='body1'>
            <h5>{titulo}</h5>
          </div>
          <div className="body2" color="text.secondary">
            {descricao}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={url} >
          Share
        </Link>
      </CardActions>
    </Card>
  );
}

export default Cards;