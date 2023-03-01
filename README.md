# React or Vue + Express + MySQL環境の雛形

## 以下のフォルダを作成

`mkdir -p api app db/conf db/logs`

- api
- app
- db
  - conf
  - logs

## apiサーバでnpmインストール

```bash
docker-compose run --rm --no-deps api /bin/bash
npm install
```

## webサーバでnpmインストール

```bash
docker-compose run --rm --no-deps web /bin/bash
npm install
```

## docker-composeで起動

`docker-compose up`

## TODO

- [ ] 型制約のリファクタリング