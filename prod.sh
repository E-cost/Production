#!/bin/bash

# Функция для проверки успешности предыдущей команды
check_success() {
  if [ $? -ne 0 ]; then
    echo "Произошла ошибка. Завершение скрипта."
    exit 1
  fi
}

echo "Проверка наличия Docker..."

# Проверка: установлен ли Docker
if ! command -v docker &> /dev/null; then
  echo "Docker не установлен. Пожалуйста, установите Docker и повторите попытку."
  exit 1
else
  echo "Docker установлен."
fi

# Определение операционной системы
OS="$(uname -s)"

case "${OS}" in
    Linux*)     
        echo "Операционная система: Linux"
        if (! docker stats --no-stream &> /dev/null); then
            echo "Docker не запущен. Запускаем Docker..."
            sudo systemctl start docker
            check_success
            echo "Docker успешно запущен."
        fi
        ;;
    Darwin*)    
        echo "Операционная система: macOS"
        if (! docker stats --no-stream &> /dev/null); then
            echo "Docker не запущен. Запускаем Docker Desktop..."
            open --background -a Docker
            echo "Пожалуйста, подождите, пока Docker Desktop полностью запустится..."
            while (! docker stats --no-stream &> /dev/null); do
                sleep 1
            done
            echo "Docker успешно запущен."
        fi
        ;;
    CYGWIN*|MINGW*|MSYS*)
        echo "Операционная система: Windows"
        echo "Пожалуйста, используйте Docker Desktop для Windows."
        exit 1
        ;;
    *)
        echo "Неизвестная операционная система: ${OS}"
        exit 1
        ;;
esac

# Функция для запуска docker-compose
run_docker_compose() {
  echo "Запуск Docker Compose..."
  docker compose -f docker-compose.prod.yml up -d
  check_success
  echo "Проект успешно запущен."
}

# Вызов функции для запуска docker-compose
run_docker_compose

# Конец скрипта
echo "Скрипт выполнен успешно."
