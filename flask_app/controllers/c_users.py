from flask import render_template, request, redirect, session, flash, json, jsonify, make_response
from flask_app import app
# from flask_app.models.m_user import User
from flask_app.models.m_iperc import Iperc
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt( app )

#ruta principales
@app.route( '/', methods=['GET', 'POST'] )
def inicio():
    return render_template( "iperc.html")

@app.route('/json/data',methods=['POST'])
def create_iperc():
    data = {
        'peligro' : request.form['peligro'],
        'riesgo' : request.form['riesgo'],
        'probabilidad' : request.form['probabilidad'],
        'consecuencia' : request.form['consecuencia'],
        'resultado' : request.form['resultado'],
        'evaluacion' : request.form['evaluacion']
    }
    Iperc.add(data)

    print("---JSON---")
    print(data)
    print(request.form)
    # escribir código para guardarlo en nuestra base de datos.
    return jsonify(message="Controlador conectado")