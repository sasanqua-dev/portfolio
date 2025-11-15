# API Documentation

このポートフォリオサイトは以下のAPIエンドポイントを提供しています。

## エンドポイント一覧

### 1. Health Check API
ヘルスチェック用のエンドポイントです。

**URL:** `/api/health`  
**Method:** `GET`  
**レスポンス例:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-15T02:37:40.377Z",
  "message": "API is running"
}
```

### 2. Projects API
プロジェクト一覧を取得するエンドポイントです。

**URL:** `/api/projects`  
**Method:** `GET`  
**レスポンス例:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Anemos",
      "icon": "https://siesta.r2.solufit.net/anemos_icon.png",
      "description": "APIを通して公開されている情報から開発者に価値のあるデータを提供するためのシステム",
      "techStack": ["Python"],
      "link": "https://anemos.solufit.net",
      "github": ""
    }
  ],
  "count": 2
}
```

### 3. GitHub User API
外部APIの例として、GitHubユーザー情報を取得するエンドポイントです。

**URL:** `/api/github/:username`  
**Method:** `GET`  
**パラメータ:**
- `username` (required): GitHubのユーザー名

**レスポンス例:**
```json
{
  "success": true,
  "data": {
    "login": "octocat",
    "name": "The Octocat",
    "bio": "...",
    "public_repos": 8,
    "followers": 1000,
    "following": 0
  }
}
```

**エラーレスポンス例:**
```json
{
  "statusCode": 403,
  "message": "GitHub API Error: rate limit exceeded"
}
```

## 使用例

### クライアント側からの呼び出し

Nuxt 3の`$fetch`または`useFetch`を使用してAPIを呼び出すことができます。

```vue
<script setup>
// $fetchを使用する例
const healthCheck = async () => {
  const data = await $fetch('/api/health');
  console.log(data);
};

// useFetchを使用する例（自動でリアクティブになります）
const { data: projects } = await useFetch('/api/projects');
</script>
```

## デモページ

APIの動作を確認できるデモページが `/api-demo` にあります。

## 技術仕様

- フレームワーク: Nuxt 3
- サーバーエンジン: Nitro
- 外部API呼び出し: $fetch (ofetch)
