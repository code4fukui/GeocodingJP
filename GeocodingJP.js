// https://www.geocoding.jp/api/

import { XML } from "https://js.sabae.cc/XML.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const delay = 10 * 1000; // アクセス頻度は 10秒に1度

let lastt = null;

const decode = async (nameoradr) => {
  if (lastt) {
    const dt = new Date().getTime() - lastt;
    if (dt < delay) {
      await sleep(delay - dt);
    }
  }
  lastt = new Date().getTime();
  
  const url = "https://www.geocoding.jp/api/?q=" + encodeURIComponent(nameoradr);
  const xml = await (await fetch(url)).text();
  const data = XML.toJSON(xml);
  //console.log(data);
  const c = data.result.coordinate;
  return { lat: parseFloat(c.lat["#text"]), lng: parseFloat(c.lng["#text"]) };
};

export const GeocodingJP = { decode };
