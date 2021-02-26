import React from "react";

function HomeIcon(props) {
  if (props.active) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="prefix__r-13gxpu9 prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-lwhw9o prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr"
        {...props}
      >
        <path d="M22.58 7.35L12.475 1.897a1 1 0 00-.95 0L1.425 7.35A1.002 1.002 0 001.9 9.231c.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 00.95-1.759zM12 15.435a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" />
      </svg>
    );
  } else {
    return (
      <svg
        viewBox="0 0 24 24"
        className="prefix__r-jwli3a prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-lwhw9o prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr"
        {...props}
      >
        <path d="M22.46 7.57L12.357 2.115a.751.751 0 00-.713 0L1.543 7.57a.75.75 0 00.713 1.32l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304a.752.752 0 00-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z" />
        <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z" />
      </svg>
    );
  }
}
export default HomeIcon;
