# GeocodingJP

[Geocoding API - 住所から緯度経度を検索](https://www.geocoding.jp/api/) Geocoding API for JavaScript ES module

## Usage

```JavaScript
import { GeocodingJP } from  "./GeocodingJP.js";

console.log(await GeocodingJP.decode("神山まるごと高専")); // { lat: 33.972836, lng: 134.362854 }
```
