module.exports = {
  appContainer: {
    padding: '0.5%',
    overflow: 'hidden',
    fontFamily: 'Raleway',
    backgroundColor: '#033649',
  },
  subredditsContainer: {
    padding: '0',
    width: '200px',
    float: 'left',
    margin: '-0.1px 5px 0 0',
    listStyle: 'none',
    backgroundColor: '#A8DBA8',
    textTransform: 'uppercase',
  },
  subredditItem: {
    color: '#0B486B',
    padding: '5%',
    fontSize: '1em',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#CFF09E',
    }
  },
  title: {
    backgroundColor: '#79BD9A'
  },
  postItem: {
    color: '#0B486B',
    padding: '3%',
    fontSize: '1em',
    backgroundColor: '#A8DBA8',
  },
  active: {
    backgroundColor: '#79BD9A',
  },
  display: {
    textTransform: 'uppercase',
    display: 'inline-block',
  },
  link: {
    textDecoration: 'none',
    color: '#0B486B',
    cursor: 'pointer',
  },
};
