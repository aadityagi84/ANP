import React from "react";

function VideoBanner() {
  return (
    <div>
      <div className="w-full">
        <video width="100%" controls>
          {/* <source
            src="https://www.brandedcorporategift.com/content/video/procter-promo-video.mp4"
            type="video/mp4"
          /> */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoBanner;
