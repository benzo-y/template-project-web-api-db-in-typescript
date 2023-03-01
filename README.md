# React or Vue + Express + MySQL環境の雛形

## 構築手順

### .envを配備

`docker-compose.yml`で環境変数を設定するために、`.env`を直下に配備する。
以下、設定例。

```
DB_ROOT_HOST=%
DB_NAME=sample_db
DB_USER=sample_user
DB_PASS=password
TZ=Asia/Tokyo
```

### DB用のフォルダ作成

`mkdir -p db/conf db/logs`

- api
- app
- db
  - conf
  - logs

### apiサーバでnpmインストール

```bash
docker-compose run --rm --no-deps api /bin/bash
npm install
```

### webサーバでnpmインストール

```bash
docker-compose run --rm --no-deps web /bin/bash
npm install
```

### docker-composeで起動

`docker-compose up`

## TODO

- [ ] 型制約のリファクタリング