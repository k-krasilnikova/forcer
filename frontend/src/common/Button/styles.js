const styles = () => ({
  buttonContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: 60,
  },
  hidden: {
    visibility: 'hidden',
    transition: 'none',
    pointerEvents: 'none',
  },
  visible: {
    visibility: 'visible',
  },
  loader: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
  },
  buttonTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
