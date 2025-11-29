###############################
# 1. BUILD STAGE
###############################
FROM node:20 AS build

WORKDIR /app

# Copy package files first to use build cache
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy entire project including .env
COPY . .

# Ensure Strapi CLI is executable
RUN chmod +x node_modules/.bin/strapi

# Build Strapi Admin Panel (uses .env automatically)
RUN npm run build


###############################
# 2. RUNTIME STAGE
###############################
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy everything from build stage
COPY --from=build /app /app

# Expose Strapi port
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
