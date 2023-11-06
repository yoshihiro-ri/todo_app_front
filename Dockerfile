# 使用するベースイメージを指定
FROM node:19

# コンテナ内の作業ディレクトリを設定
WORKDIR /todo_app_front/

# ローカルのアプリケーションファイルをコンテナにコピー
COPY todo_app_front/package.json ./
COPY todo_app_front/package-lock.json ./
RUN npm install

# アプリケーションのソースコードをコンテナにコピー
COPY todo_app_front/public ./public/
COPY todo_app_front/src ./src/

COPY . .

# アプリケーションのポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
