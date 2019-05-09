from flask import Flask
from flask import render_template
from flask import request
import os


app = Flask(__name__)
@app.route("/")
def init():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)