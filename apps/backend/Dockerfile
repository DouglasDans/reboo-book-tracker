
FROM node:lts-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependências para o contêiner
COPY ./yarn.lock ./
COPY ./.yarnrc.yml ./
COPY ./apps/frontend/package.json ./

# Instale as dependências
RUN corepack enable && corepack prepare yarn@4.5.2 --activate
RUN yarn install

# Copie o restante dos arquivos da aplicação
COPY --chown=app:app ./apps/frontend /app

RUN yarn prisma generate