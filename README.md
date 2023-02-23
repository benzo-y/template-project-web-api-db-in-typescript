# React or Vue + express + MySQL環境構築

## 以下のフォルダを作成

`mkdir -p api app db/conf db/logs`

- api
- app
- db
  - conf
  - logs

## apiサーバの構築

```bash
docker-compose run --rm --no-deps api /bin/bash
npm install
```
