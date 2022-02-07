from flask import render_template, request, redirect, session, flash
from flask_app import app
# from flask_app.models.m_user import User
# from flask_app.models.m_iperc import Iperc
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt( app )

#ruta principales
@app.route( '/', methods=['GET'] )
def inicio():
    return render_template( "iperc.html")

