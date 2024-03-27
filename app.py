from os import path
from pathlib import Path

from flask import Flask, render_template
from flask_frozen import Freezer

from sassutils.wsgi import SassMiddleware

template_folder = path.abspath('./content')

app = Flask(__name__, template_folder=template_folder)
#app.config['FREEZER_BASE_URL'] = environ.get('CI_PAGES_URL')
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True

app.wsgi_app = SassMiddleware(app.wsgi_app, {
    'app': ('static')
})


freezer = Freezer(app)

@app.cli.command()
def freeze():
    freezer.freeze()

@app.cli.command()
def serve():
    freezer.run()

@app.route('/')
def home():
    return render_template('pages/home.html')

@app.route('/<page>.html')
def pages(page):
    return render_template(str(Path('pages')) + '/' + page.lower() + '.html')

if __name__ == "__main__":
    app.run(host="localhost", port=8080)
