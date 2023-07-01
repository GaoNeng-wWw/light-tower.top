FROM node:18.7.0-alpine
WORKDIR /usr/light-tower
COPY . .
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk add --no-cache --update \
    build-base \
    libpng-dev \
    libjpeg-turbo-dev \
    libc6-compat \
    autoconf \
    automake \
    libtool \
    nasm \
    yasm
RUN npm install pnpm -g && \
    pnpm i --shamefully-hoist && \
    pnpm build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]