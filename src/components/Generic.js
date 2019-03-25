/**
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';
import modifiers from '@regeta-ui/modifiers';
import globals from '@regeta-ui/globals';

const GenericTag = props => {
  const { children, id, className, ...restProps } = props;
  
  cost classProps = props => {
    return classNames(
      className,
      modifiers.classnames(props)
  };
  
  return (
    <div id={id} {...restProps} className={classProps(props)}>
      {children}
    </div>
  );
};

GenericTag.propTypes = {
  ...globals.propTypes,
  ...modifiers.propTypes,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

GenericTag.defaultProps = {
  ...globals.defaultProps,
  ...modifiers.defaultProps,
  children: null,
  id: 'regeta-generic-tag',
  className: 'regeta-tag'
};

export default GenericTag;
