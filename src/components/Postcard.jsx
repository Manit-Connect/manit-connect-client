
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
import { purple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Modal, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Share from '@mui/icons-material/Share';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { apiUrl } from '../utils/constant';
import images from '../data/images';

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function Postcard({ post }) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likePost = () => {
    fetch(`${apiUrl}/posts/like/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: post._id,
      }),
    }).then(() => {
      console.log('liked');
    });
  }

  return (
    <>
      <Card style={{ width: '100%', marginBottom: 12 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.commitee.toUpperCase()}
          subheader={post.createdAt}
        />
        <CardMedia
          component="img"
          height="300"
          image={images.find(image => image.name === post.commitee).url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={likePost} aria-label="add to favorites">
            <FavoriteIcon />
            <Typography sx={{ marginLeft: 1 }} variant="h6" color="text.secondary">
              {post.likes}
            </Typography>
          </IconButton>
          <IconButton onClick={handleOpen} aria-label="share">
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
            <Typography paragraph>More:</Typography>
            <Typography paragraph>
              {post.content}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share Link
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton color='primary' aria-label="share">
              <Share />
            </IconButton>
            <IconButton color='primary' aria-label="facebook">
              <Facebook />
            </IconButton>
            <IconButton color='primary' aria-label="twitter">
              <Twitter />
            </IconButton>
            <IconButton color='primary' aria-label="linkedin">
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}