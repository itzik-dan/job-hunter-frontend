import React from 'react';

export default () => (
  <div className="preloader-wrapper big active" style={{position: "fixed", top: "40%", left: "48%" }}>
    <div className="spinner-layer spinner-blue-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
);
