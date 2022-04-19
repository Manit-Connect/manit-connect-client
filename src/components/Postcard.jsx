
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Postcard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ margin: 16 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Aaroha"
        subheader="Feburary 2, 2022"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39QbiIOWlPHJt2mbKZB0s23arBz9uEa9hDQ&usqp=CAU"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>News:</Typography>
          <Typography paragraph>
            Sujeet is a 12-year old boy from the Anna Nagar slums, who began working from a very young age as a newspaper delivery boy. Oftentimes he has gone to bed on an empty stomach. Doing mundane things such as going to school and playing with friends had been eradicated from his life, since he had to sell newspapers for a living. At Aaroha, we wanted to bring about a change in his life since we believed in his potential. Today, Sujeet is a student at Silver Bells Convent School and is receiving education like any other child. Our volunteers tutor him regularly at the center in Anna Nagar. He is now the top ranker of his school and is on the path to fulfill his dream of becoming a scientist. He now believes that no dream is too difficult to achieve.
          </Typography>
          <Typography paragraph>
            Due to tremendous efforts by our volunteers, and the willingness to learn among young children like Lavanya and their dedication to come out at the top, there have been new milestones that have been overturned in the past years. Lavanya, from Class V, who scored 99.75% in her Class IV results, thus coming out at the top of her class, was given the opportunity to join Carmel Convent School. From studying at a local government school to attending an English medium school where her needs will be tended to, Lavanya and Aaroha, have both come a long way. And she acts as an inspiration for the other children at the center.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}