# # 1. BUILDER STAGE

# FROM node:20-alpine AS builder

# # Required for Strapi node-gyp builds
# RUN apk add --no-cache python3 make g++ git

# WORKDIR /app

# # Install production + dev deps
# COPY package*.json ./
# RUN npm ci

# # Copy full source
# COPY . .

# # Remove old caches (VERY IMPORTANT)
# RUN rm -rf .cache build node_modules/.cache

# # Build admin panel
# RUN npm run build

# # Remove dev dependencies → final image is smaller
# RUN npm prune --production


# # 2. RUNNER STAGE (final image)

# FROM node:20-alpine AS runner

# WORKDIR /app

# # Security: run as non-root user
# RUN addgroup -S strapi && adduser -S -G strapi strapi

# # Copy only built output
# COPY --from=builder --chown=strapi:strapi /app ./

# ENV NODE_ENV=production

# # Cloud Run exposes port 8080 → Strapi must run on 1337 but Cloud Run maps it automatically
# EXPOSE 1337

# USER strapi

# CMD ["npm", "start"]




# 1. BUILDER STAGE

FROM node:20-alpine AS builder

# Required for Strapi node-gyp builds
RUN apk add --no-cache python3 make g++ git

WORKDIR /app

# Install production + dev deps
COPY package*.json ./
RUN npm ci

# Copy full source
COPY . .

# Remove old caches (VERY IMPORTANT)
RUN rm -rf .cache build node_modules/.cache

# Build admin panel
RUN npm run build

# Remove dev dependencies → final image is smaller
RUN npm prune --production


# 2. RUNNER STAGE (final image)

FROM node:20-alpine AS runner

WORKDIR /app

# Security: run as non-root user
RUN addgroup -S strapi && adduser -S -G strapi strapi

# Copy only built output
COPY --from=builder --chown=strapi:strapi /app ./

ENV NODE_ENV=production

# Cloud Run exposes port 8080 → Strapi must run on 1337 but Cloud Run maps it automatically
EXPOSE 1337

USER strapi

CMD ["npm", "start"]