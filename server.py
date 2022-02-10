from flask_app import app
from flask_app.controllers import c_users, c_ipercs


if __name__ == "__main__":
    app.run( debug = True )