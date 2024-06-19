FROM node:latest AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем зависимости (package.json и package-lock.json)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения в рабочую директорию
COPY . .

# Собираем приложение с помощью Vite
RUN npm run build

# Отдельный этап для создания production образа
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа (build) в NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE порт, если это необходимо
EXPOSE 80

# Команда для запуска NGINX внутри контейнера
CMD ["nginx", "-g", "daemon off;"]