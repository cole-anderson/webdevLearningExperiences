# Server
from flask import Flask

app = Flask(__name__)

# Members API Route

# Base Implementation (DEL: DELETE LATER)


@app.route("/members")
def members():
    userin = "member11"
    return{"members": [userin, "Member2", "Member3", "Member12123"]}

# Portfolio Data:


@app.route("/portfolio")
def portfolio():
    return {"coins": ["doge", "shib", "eth"]}


if __name__ == "__main__":
    app.run(debug=True)
