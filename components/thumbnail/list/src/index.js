import React from 'react'
import PropTypes from 'prop-types'
import ThumbnailBasic from '@schibstedspain/sui-thumbnail-basic'

const ThumbnailList = ({items, captionText, placeholder, fallback, target}) =>
  <ul className='sui-ThumbnailList'>
    {
      items.map((item, index) =>
        <li className='sui-ThumbnailList-item' key={index}>
          <ThumbnailBasic
            alt={item.alt}
            captionText={captionText}
            fallback={fallback}
            href={item.href}
            placeholder={placeholder}
            src={item.src}
            target={target}
          />
        </li>
      )
    }
  </ul>

ThumbnailList.displayName = 'ThumbnailList'

ThumbnailList.propTypes = {
  /**
   * array of thumbnail/basic props
   * https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  items: PropTypes.array.isRequired,
  /**
   * https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  captionText: PropTypes.string.isRequired,
  /**
   * @link https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  placeholder: PropTypes.object.isRequired,
  /**
   * @link https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  fallback: PropTypes.object,
  /**
   * HTML anchor target
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
}

ThumbnailList.defaultProps = {
  items: []
}

export default ThumbnailList
