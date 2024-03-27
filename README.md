# YCBS 2024 介紹網站

使用 Python Frozen-Flask

![main page](docs/main_page.png)
![agenda page](docs/agenda_page.png)
![intern page](docs/intern_page.png)

## Setup up environment

```
python3 -m venv venv
. venv/bin/activate # on Linux, MacOS; or
. venv\Scripts\activate # on Windows
pip install -r dependencies.txt
```

## Run

```
python app.py
```

## Build

```
FLASK_APP=app.py flask freeze
```
