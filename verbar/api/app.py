from flask import Flask
app = Flask(__name__, static_url_path='', static_folder='app')
import os
from verbar import Verbar

@app.route('/')
def hello_world():
    print "test"
    v = Verbar()
    print v.generate_conjugation()
    return 'Hello World!'

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 3000)))