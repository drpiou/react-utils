import React from 'react';

const getComponentName = (component: React.ComponentType): string | undefined => {
  return component.displayName || component.name || undefined;
};

export default getComponentName;
