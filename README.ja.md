# GeocodingJP

[Geocoding API](https://www.geocoding.jp/api/)を使用した JavaScript ES moduleの地理コーディング APIです。

## 機能
- 住所から緯度経度座標への変換APIを提供
- 単一の `decode()` 関数で簡単に使用可能
- API呼び出しの過度な頻度を防ぐレート制限を含む

## 使い方
```JavaScript
import { GeocodingJP } from  "./GeocodingJP.js";

console.log(await GeocodingJP.decode("神山まるごと高専")); // { lat: 33.972836, lng: 134.362854 }
```

## 必要環境
このプロジェクトにはJavaScriptランタイム (例: Node.js, Deno) が必要です。

## データ・API
このプロジェクトは[Geocoding.jp](https://www.geocoding.jp/)が提供する[Geocoding API](https://www.geocoding.jp/api/)を使用しています。

## ライセンス
このプロジェクトはMITライセンスの下で提供されています。