import React from "react";
import head from "./header";
import show from "./node";
import imgica from "./image";
const s =
  "https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png";
function app() {
  return (
    <div>
      {head()}
      <div>
        <img src={imgica()}></img>
      </div>
    </div>
  );
}
export default app;
