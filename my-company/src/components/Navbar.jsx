import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#2c3e50', padding: '15px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 20px', padding: '8px 16px', borderRadius: '4px', transition: 'background-color 0.3s' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 20px', padding: '8px 16px', borderRadius: '4px', transition: 'background-color 0.3s' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none', margin: '0 20px', padding: '8px 16px', borderRadius: '4px', transition: 'background-color 0.3s' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 20px', padding: '8px 16px', borderRadius: '4px', transition: 'background-color 0.3s' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
