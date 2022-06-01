import os

import sys

import time

from flask import Flask , render_template, jsonify, redirect, url_for

app = Flask(__name__ , static_folder= 'static' , template_folder= 'templates')

app.config['SECRET_KEY'] = os.urandom(10)

@app.route('/')
def Home():
    return render_template('home.html')

#####################################3

if __name__ == '__main__':
    
    app.run(host='127.0.0.1', debug=True, port=5000)
