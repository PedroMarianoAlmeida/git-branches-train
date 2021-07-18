import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Tree from 'react-d3-tree';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
  },
}));

const orgChart = {
  name: 'CEO',
  children: [],
};

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h4">Git Branches Train(ing)</Typography>
      </Box>
      <Box>
        <Box>
          <Typography variant="h2">Model</Typography>
          <Box height="300px" width="300px">
            <Tree data={orgChart} />
          </Box>
        </Box>

        <Box>
          <Typography variant="h2">Current</Typography>
          <Box height="300px">
            <Tree data={orgChart} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
