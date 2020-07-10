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
    v2ttext = request.form.get("chat_message")
    return redirect(url_for('items.index'))


def index1():
    conditions = None
    print(request.endpoint)
    response = request.get_json()
    print(response)
    session['email'] = 'kunjmaniar1999@gmail.com'
    query = response['voice'].lower()
    x = redrct(query)
    print(x)

    if x == query:
        #x = voiceLn2Sql(response['voice'])
        if 'select' in query:
            with open("C:/Users/kunjm/Desktop/Drives/Projects/Kaku Office/phase_flask1/src/models/voice_bot/output.json") as f:
                json_data = json.load(f)
                print(json_data)
                #json_data = json.load(f)
                collection = json_data['from']['table']
                conditions = {}
                cond = json_data['where']['conditions']
                for i in cond:
                    if i['operator'] == "=":
                        conditions[i['column']] = re.compile(str(i['value'][1:len(i['value'])-1]),re.IGNORECASE)

                print(collection, conditions)
                #x = "?collection" + str()
                urlmap = {
                    'companies': 'companies/new',
                    "invoices": 'invoices/',
                    "items": 'items/',
                    "parties": 'parties/',
                }

                if collection in urlmap:
                    x = urlmap[collection] #+ 'cond=' +str(conditions)
                print(x)


    print(x)

    #session['conditions'] = conditions
    print(session)
    print(conditions)
    Database.update("sessions", {"_id": 1000000000}, {'conditions':conditions})
    #return redirect(url_for('users.index'))
    return jsonify({'data':x})
#
# def invoices():
#
#     return redirect(url_for('invoices.index'))
#     #return redirect(url_for('invoices.new_invoice'))
#     #return redirect(url_for('invoices.serial_no_datatable'))
#
#
#     #return redirect(url_for('items.index'))
#     #return redirect(url_for('items.new_item'))
#
#
#     #return redirect(url_for('parties.index'))
#     #return redirect(url_for('parties.new_party'))
#
#
#     #return redirect(url_for('users.user_logout'))
#
#     #return redirect(url_for('parties.index'))
def redrct(query):
    #query = query.lower()
    opn=["move","back","go","open","log out","exit","close"]
    thesaurus={
        "companies":["comapany"],
        "dashboard": ["home","main"],
        "invoices":["invoice","receipt"],
        "items":["item"],
        "parties":["party"],
        "logout":["exit","close","log out"]
    }
    urlmap={
        'companies': 'companies/new',
        "dashboard": 'users/',
        "invoices":'invoices/',
        "items":'items/',
        "parties":'parties/',
        "logout":'users/logout'
    }
    for i in opn:
        if i in query:
            for j in thesaurus:
                for k in thesaurus[j]:
                    if k in query or j in query:
                        return urlmap[j]#redirect(url_for(urlmap[j]))
    else:
        return query
# dict={
#     "bank name":["bank_name"],
#     "bank":["bank_name"]
# }
# edit=["","",""]

def voiceLn2Sql(query):
    database_path = "C:/Users/kunjm/Desktop/studies/SEM 6/Natural Language Processing/Project/ln2sql-master/ln2sql-master/ln2sql/database_store/accounting.sql"
    # database_path="database_store/city.sql"
    language_path = "C:/Users/kunjm/Desktop/studies/SEM 6/Natural Language Processing/Project/ln2sql-master/ln2sql-master/ln2sql/lang_store/english.csv"
    json_output_path = "C:/Users/kunjm/Desktop/Drives/Projects/Kaku Office/phase_flask1/src/models/voice_bot/output.json"
    thesaurus_path = "C:/Users/kunjm/Desktop/studies/SEM 6/Natural Language Processing/Project/ln2sql-master/ln2sql-master/ln2sql/thesaurus_store/th_english.dat"
    #C:\Users\kunjm\Desktop\Drives\
    # thesaurus_path=None
    # stopwords_path="stopwords/english.txt"
    stopwords_path = None

    x = Ln2sql(database_path, language_path, json_output_path, thesaurus_path, stopwords_path, ).get_query(query)
    return x