import React from "react";

export type LogoProps = {
  showSubtitle: boolean;
};
function Logo({ showSubtitle }: LogoProps) {
  return (
    <div>
      <h1>MOC</h1>
      {showSubtitle && <div>The perfect App</div>}
    </div>
  );
}

export default Logo;
