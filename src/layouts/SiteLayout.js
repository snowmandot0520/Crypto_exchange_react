import { memo } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';

const SiteLayout = memo(({ children }) => (
  <div className='flex full-width full-height'>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='content'>{children}</div>
  </div>
));

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
