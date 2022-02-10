from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Iperc:
    def __init__(self, data):
        self.id = data["id"]
        self.peligro = data["peligro"]
        self.riesgo = data["riesgo"]
        self.probabilidad = data["probabilidad"]
        self.consecuencia = data["consecuencia"]
        self.resultado = data["resultado"]
        self.evaluacion = data["evaluacion"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        # self.user_id = data["user_id"]
    
    class Riesgo:
        pass

    #Add Show method
    @classmethod
    def add(cls, data):
        query = "INSERT INTO matrix (peligro, riesgo, probabilidad,consecuencia, resultado, evaluacion, created_at, updated_at) VALUES(%(peligro)s, %(riesgo)s, %(probabilidad)s, %(consecuencia)s, %(resultado)s, %(evaluacion)s, NOW(), NOW());" # %(user_id)s
        return connectToMySQL("iperc_project").query_db(query,data)
    

    #Get All matrixes method
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM matrix;"
        resultado = connectToMySQL("iperc_project").query_db(query)
        matrix=[]
        for m in resultado:
            matrix.append(cls(m))
        return matrix