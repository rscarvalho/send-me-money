import React from 'react';

export default function FormPage({ children }) {
  return (
    <div>
      <h1>Form</h1>
      {children}
    </div>
  );
}

FormPage.propTypes = {
  children: React.PropTypes.node,
};
