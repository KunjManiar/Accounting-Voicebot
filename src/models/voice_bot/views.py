from src.common.database import Database
import uuid
import datetime
from src.common.utils1 import Utils
from flask import Blueprint, request, session, url_for, render_template,jsonify
from werkzeug.utils import redirect
import src.models.users.decorators as user_decorators
from ln2sql import Ln2sql
import json
import re
__author__="Kunj"

voicebot_blueprint = Blueprint('voicebot',__name__)


@voicebot_blueprint.route('/',methods=["POST","GET"])
def index():
    v2text = request.form.get("data")
    # print(v2text)
    x,flag = voiceLn2Sql(v2text)
    # print("flag ",flag,x)
    if x == 1:
        return render_template("errors/voice_error.jinja2")
    elif flag == 1:
        session['conditions'] = {}
        return redirect(url_for(x))
    else:
        with open("C:/Users/kunjm/Desktop/Drives/Projects/Kaku Office/phase_flask1/src/models/voice_bot/output.json") as f:
            json_data = json.load(f)
            print(json_data)
            # json_data = json.load(f)
            collection = json_data['from']['table']
            #conditions = {}
            conditions1 = {}
            conditions_array=[]
            if json_data['where']!={}:
                # cond = {}
                if 'condition' in json_data['where'] and json_data['where']['condition'] !={}:
                    cond = json_data['where']['condition']
                else:
                    cond = json_data['where']['conditions']
                # print(cond)
                for i in cond:
                    # print(i['operator'])
                    if str(i['operator']) != "AND" and str(i['operator']) != 'OR':
                        # print(str(i['operator']),"in not and or")
                        temp = conditions_simulator(collection, i)
                        conditions_array.append(temp)
                    else:
                        if str(i['operator']) == 'AND':
                            conditions1['$and'] = []
                            print(conditions1)
                        else:
                            conditions1['$or'] = []

                if len(conditions_array) != 1:
                    # print("IN not 1",conditions1)
                    if '$and' in conditions1:
                        conditions1['$and'] = conditions_array
                    else:
                        conditions1['$or'] = conditions_array
                else:
                    conditions1 = conditions_array[0]
            else:
                conditions1={}
            # print(cond)

            print(collection, conditions1)
            # x = "?collection" + str()
            if "print" in v2text.lower():
                print("Ok")
                print(url_for("invoices.print_invoice",invoice_id=str(conditions1['no'])))
                return redirect(url_for('invoices.print_invoice',invoice_id=conditions1['no']))
            else:

                session['conditions'] = conditions1
                urlmap = {
                    'companies': 'companies.index',
                    "invoices": 'invoices.index',
                    "items": 'items.index',
                    "parties": 'parties.index',
                }

                if collection in urlmap:
                    x = urlmap[collection]  # + 'cond=' +str(conditions)
                print(x)
                return redirect(url_for(x))
            # return "Hello"

def conditions_simulator(collection,i):
    conditions1 = {}
    if i['operator'] == "=":
        x = str(i['value'][1:len(i['value']) - 1])
        try:
            x = float(x)
            conditions1[i['column']] = x
        except:
            # conditions[i['column']] = re.compile(str(i['value'][1:len(i['value']) - 1]), re.IGNORECASE)
            conditions1[i['column']] = str(i['value'][1:len(i['value']) - 1])
    elif i['operator'] == "<":
        x = str(i['value'][1:len(i['value']) - 1])
        try:
            x = float(x)
            conditions1[i['column']] = {"$lt": x}
        except:
            conditions1[i['column']] = {"$lt": str(i['value'][1:len(i['value']) - 1])}
    elif i['operator'] == ">":
        x = str(i['value'][1:len(i['value']) - 1])
        try:
            x = float(x)
            conditions1[i['column']] = {"$gt": x}
        except:
            conditions1[i['column']] = {"$gt": str(i['value'][1:len(i['value']) - 1])}
    elif collection == "invoices":
        if i['column'] == "no":
            if i['operator'] == "!=":
                conditions1[i['column']] = str(i['value'][1:len(i['value']) - 1])
    elif i['operator'] == "!=":
        x = str(i['value'][1:len(i['value']) - 1])
        try:
            x = float(x)
            conditions1[i['column']] = {"$ne": x}
        except:
            conditions1[i['column']] = {"$ne": str(i['value'][1:len(i['value']) - 1])}
    return conditions1


def nxt(query):
    inr={
        "no": ["number"],
        "price is":["prices"],
        "tax is": ["texas"],
        "companies":["comapany"],
        "dashboard": ["home","main"],
        "invoices ":["invoice ","receipt"],
        "items ":["item "],
        "parties":["party"],
        "city":["cities"],
        "state ":["states "],
        "address":["addresses"],
        "model_name":["model name"],
        "tax":["taxs","taxes"],
        "price ":["cost","prices "],
        "total_amount":["total amount"]
    }
    for j in inr:
        for k in  inr[j]:
            if k in query:
                print(k,j)
                if k=="item":
                    continue
                query=query.replace(k,j)
    # temp.replace("parties","party")
    return query

def redrct(query):
    # opn=["move","back","go","open"]
    thesaurus={
        "companies":["company"],
        "dashboard": ["home","main"],
        "invoices":["invoice","receipt"],
        "items":["item"],
        "parties":["party"],
        "logout":["exit","close","log out","logout"]
    }
    urlmap={
        'companies': 'companies.index',
        "dashboard": 'users.index',
        "invoices":'invoices.index',
        "items":'items.index',
        "parties":'parties.index',
        "logout":'users.user_logout'
    }
    for j in thesaurus:
        for k in  thesaurus[j]:
            # print(k)
            if k in query or j in query:
                # print (k,j)
                return urlmap[j]#redirect(url_for(urlmap[j]))

def voiceLn2Sql(query):
    database_path = "C:/Users/kunjm/Desktop/studies/SEM 6/Natural Language Processing/Project/ln2sql/ln2sql/database_store/accounting.sql"
    # database_path="database_store/city.sql"
    language_path = "C:/Users/kunjm/Desktop/studies/SEM 6/Natural Language Processing/Project/ln2sql/ln2sql/lang_store/english.csv"
    json_output_path = "C:/Users/kunjm/Desktop/Drives/Projects/Kaku Office/phase_flask1/src/models/voice_bot/output.json"
    thesaurus_path = "C:/Users/kunjm/Desktop/studies/SEM 6/Natural Language Processing/Project/ln2sql/ln2sql/thesaurus_store/th_english.dat"
    #C:\Users\kunjm\Desktop\Drives\
    # thesaurus_path=None
    # stopwords_path="stopwords/english.txt"
    stopwords_path = None
    x = ""
    flag=0
    query = query.lower()
    print(query)
    #x = Ln2sql(database_path, language_path, json_output_path, thesaurus_path, stopwords_path, ).get_query(query)
    opn = ["move", "back", "go", "open", "log out", "exit", "close", "logout", "dashboard"]
    for i in opn:
        if i in query:
            x = redrct(query)
            flag = 1
            break
    else:
        # print("n ",nxt(query))
        try:
            x = Ln2sql(database_path, language_path, json_output_path, thesaurus_path, stopwords_path, ).get_query(nxt(query))
            # print("In try ", x)
        except:
            x = 1
    return (x,flag)