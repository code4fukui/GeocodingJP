import * as t from "https://deno.land/std/testing/asserts.ts";
import { GeocodingJP } from  "./GeocodingJP.js";

Deno.test("simple", async () => {
  const data = await GeocodingJP.decode("福井高専");
  t.assertEquals(data, { lat: 35.936721, lng: 136.170847 });
  const data2 = await GeocodingJP.decode("石川高専");
  t.assertEquals(data2, { lat: 36.663439, lng: 136.738541 });
});

