import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderRight = memo(() => {
  const location = useLocation();

  return (
    <div className='header-right no-select'>
      <div className='flex flex-v-center'>
        <ul className='header-menu nowrap'>
          <li>
            <Link
              to='/market'
              className={location.pathname.toLowerCase().includes('/market') ? 'active' : 'passive'}
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              to='/data'
              className={location.pathname.toLowerCase().includes('/data') ? 'active' : 'passive'}
            >
              Data
            </Link>
          </li>
          <li>
            <Link
              to='/docs'
              className={location.pathname.toLowerCase().includes('/docs') ? 'active' : 'passive'}
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              to='/api'
              className={location.pathname.toLowerCase().includes('/api') ? 'active' : 'passive'}
            >
              API
            </Link>
          </li>
        </ul>
        <ul className='header-icons nowrap'>
          <li>
            <Link to='/search'>
              <i className='material-icons'>search</i>
            </Link>
          </li>
          <li>
            <Link to='/members/notifications'>
              <span className='notification-badge'>23</span>
              <i className='material-icons'>notifications</i>
            </Link>
          </li>
        </ul>
        <ul className='header-user nowrap'>
          <li>
            <Link to='/members'>
              <span>Tarık Özbalkan</span>
              <span>@tarikoz</span>
            </Link>
          </li>
          <li>
            <Link to='/members'>
              <div className='profile-picture' />
            </Link>
          </li>
          <li>
            <Link to='/members/signout' className='signout'>
              <i className='material-icons'>power_settings_new</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default HeaderRight;
