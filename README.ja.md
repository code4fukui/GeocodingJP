# GeocodingJP

[Geocoding API - 住所から緯度経度を検索](https://www.geocoding.jp/api/) JavaScript ESモジュール用のGeocoding APIです。

## 特徴
- 住所を緯度・経度座標に変換するAPIを提供
- 単一の `decode()` 関数によるシンプルな使い方
- 過度なAPI呼び出しを防ぐためのレート制限を実装

## 要件
本プロジェクトには JavaScript ランタイム（例: Node.js、Deno）が必要です。

## 使い方
```JavaScript
import { GeocodingJP } from  "./GeocodingJP.js";

console.log(await GeocodingJP.decode("神山まるごと高専")); // { lat: 33.972836, lng: 134.362854 }
```

## データ / API
本プロジェクトは、[Geocoding.jp](https://www.geocoding.jp/) が提供する [Geocoding API](https://www.geocoding.jp/api/) を使用しています。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
