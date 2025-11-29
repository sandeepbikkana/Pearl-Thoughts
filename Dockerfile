# -----------------------------
# 1) BUILD STAGE
# -----------------------------
FROM node:20 AS build

WORKDIR /app

COPY package.json package-lock.json* ./

# Install ALL deps (dev + prod)
RUN npm install

# Copy full project
COPY . .

# Required for Strapi admin build
ENV APP_KEY1=80312f8ef997d69c7db4c88451ebb4c28c1f5d6e6e9aa8ce07b4e8c6adc65cab
ENV APP_KEY2=4431ca21f193793b0277f84d36b114806758716cb59dfa4d83bdd182429b985c
ENV APP_KEY3=c95f9ae8512f2fa39aafdb4b307fb387529a0f3b373588438fe4f8c1d3acf280
ENV APP_KEY4=cf4cf21e52921666578e85dc3d85c0c8ff375142d182a85a6cfdce64a0179f51
ENV API_TOKEN_SALT=Va7y+6mNUmvIqOPypz/Kgg==
ENV ADMIN_JWT_SECRET=LntuLZeB8TIfGI0kG8jXFw==
ENV JWT_SECRET=9P0X30yd3Yln7RZ4H0V1Vg==
ENV TRANSFER_TOKEN_SALT=bazggOYtpQEIG8CLkVtZbg==
ENV ENCRYPTION_KEY=i3qGi2TOLTtalc7ToVu0Zg==
# Ensure Strapi binary is executable
RUN chmod +x /app/node_modules/.bin/strapi

# Build admin UI
RUN npm run build



# -----------------------------
# 2) RUNTIME STAGE
# -----------------------------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app /app

EXPOSE 1337

CMD ["npm", "start"]
