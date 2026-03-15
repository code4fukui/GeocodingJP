# GeocodingJP

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[Geocoding API - Search for latitude and longitude from address](https://www.geocoding.jp/api/) Geocoding API for JavaScript ES module.

## Features
- Provides an API for converting addresses to latitude and longitude coordinates
- Simple usage with a single `decode()` function
- Includes rate limiting to avoid excessive API calls

## Requirements
This project requires a JavaScript runtime (e.g., Node.js, Deno).

## Usage
```JavaScript
import { GeocodingJP } from  "./GeocodingJP.js";

console.log(await GeocodingJP.decode("神山まるごと高専")); // { lat: 33.972836, lng: 134.362854 }
```

## Data / API
This project uses the [Geocoding API](https://www.geocoding.jp/api/) provided by [Geocoding.jp](https://www.geocoding.jp/).

## License
This project is licensed under the MIT License.