from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Iperc:
    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.network = data["network"]
        self.riesgo = self.Riesgo
        self.release_date = data["release_date"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
    
    class Riesgo:
        pass

    #Add Show method
    @classmethod
    def add(cls, data):
        query = "INSERT INTO shows (title, network, description, release_date, created_at, updated_at , user_id) VALUES(%(title)s, %(network)s, %(description)s, %(release_date)s, NOW(), NOW(), %(user_id)s);"
        return connectToMySQL("users_tv").query_db(query,data)
    

    #Get All shows method
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM shows;"
        resultado = connectToMySQL("users_tv").query_db(query)
        all_shows=[]
        for show in resultado:
            all_shows.append(cls(show))
        return all_shows