import React from 'react';
import './social.style.css';

import { SOCIAL_LINKS } from '../../configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface SocialProps { }
 
const Social: React.FC<SocialProps> = () => {

  return (<>
    <div id='social'>
      <div className='link-container'>
        {SOCIAL_LINKS().map(({ title, href, iconProps }, i) => (
          <a
            key={i}
            className={'link'}
            title={title}
            href={href}
            target='_blank' rel='noopener noreferrer'
          >
            <FontAwesomeIcon {...iconProps} size={'3x'} />
          </a>
        ))}
      </div>
    </div>
  </>);
}
 
export default Social;
