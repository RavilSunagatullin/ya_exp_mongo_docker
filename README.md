# Проект Express.js 

 Backend для Yandex Practicum 

## Структура проекта

- `src/` - папка с исходным кодом приложения
   - `database/` - папка с файлами для подключения к базе данных
   - `config/` - папка с конфигом приложения
- `index.js` - основной файл приложения

## Установка

1. Установите [Docker](https://docs.docker.com/get-docker/) и [Docker Compose](https://docs.docker.com/compose/install/), если у вас их еще нет.
2. Склонируйте репозиторий:
   
   ```bash
   git clone https://github.com/RavilSunagatullin/ya_exp_mongo_docker.git
   cd ya_exp_mongo_docker
   docker-compose up --build
# Подключение к mongoDb compass
1. Установите [MongoDb compass](https://www.mongodb.com/products/tools/compass)
2. URL для подключения mongodb://localhost:27017