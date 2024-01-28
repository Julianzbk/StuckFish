from flask import Flask, jsonify
from flask_cors import CORS

from app import main

inter = Flask(__name__)
CORS(inter)

@inter.route('/')
def index():
    return jsonify({"message": "StuckFish live"})

@inter.route("/board")
def send_board():
    board: list = main.board
    json_str = {}
    for i in range(8):
        for j in range(8):
            tile = board[i][j]
            json_str[str(i) + "," + str(j)] = str(tile)

    return jsonify(json_str)

if __name__ == "__main__":
    pass