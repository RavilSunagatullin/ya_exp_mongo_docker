# Проект Express.js

Backend для Yandex Practicum

## Структура проекта

- `src/` - папка с исходным кодом приложения
	- `database/` - папка с файлами для подключения к базе данных
	- `config/` - папка с конфигом приложения
	- `controllers/` - папка с контроллерами
	- `middlewares/` - папка с миделварами
	- `models/` - папка с моделями для базы данных
	- `routes/` - папка с роутами приложения
	- `utils/` - папка с общими утилитами
	- `__tests__/` - папка с тестами
- `index.js` - основной файл приложения
- `Dockerfile` и `docker-compose.yml` настройка Docker
- `jest.config.js` настройка тестирования
- `eslint.config.mjs`и `.prettierrc` настройка линтера и форматирования
- `.github` настройка CI в github actions

## Установка

1. Установите [Docker](https://docs.docker.com/get-docker/)
   и [Docker Compose](https://docs.docker.com/compose/install/), если у вас их еще нет.
2. Склонируйте репозиторий:
   
   ```bash
   git clone https://github.com/RavilSunagatullin/ya_exp_mongo_docker.git
   cd ya_exp_mongo_docker
   docker-compose up --build
   ```

# Подключение к mongoDb compass

1. Установите [MongoDb compass](https://www.mongodb.com/products/tools/compass)
2. URL для подключения mongodb://localhost:27017
