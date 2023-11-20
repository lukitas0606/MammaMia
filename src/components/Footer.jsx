import myBanner from '../assets/myBanner.jpg';

const Footer = () => {
    const titleStyle = {
        position: 'absolute',
        top: '40%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white', 
        fontSize: '70px', 
        fontFamily: 'Lucida Sans, sans-serif'
      };

  return (
    <>
      <img className='Banner' src={myBanner} alt="" />
      <div style={titleStyle}>Pizzería Mamma Mia</div>
    </>
  );
}

export default Footer;
