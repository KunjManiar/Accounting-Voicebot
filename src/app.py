from src.common.database import Database
from src.config import Config

__author__= 'Kunj'
from flask import Flask, render_template, session,jsonify
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

app.config.from_object(Config)
app.secret_key = "kunj"


@app.before_first_request
def init_db():
    session['email'] = None
    session['conditions'] = {}
    #Database.update("session",{"_id": 1000000000}, {'conditions':""})
    Database.initialize()

@app.route('/')
def home():
    session['email'] = None
    return render_template('home.jinja2')

from src.models.users.views import user_blueprint
app.register_blueprint(user_blueprint,url_prefix="/users")

from src.models.items.views import item_blueprint
app.register_blueprint(item_blueprint,url_prefix="/items")

from src.models.parties.views import party_blueprint
app.register_blueprint(party_blueprint,url_prefix="/parties")

from src.models.invoices.views import invoice_blueprint
app.register_blueprint(invoice_blueprint,url_prefix="/invoices")

from src.models.companies.views import company_blueprint
app.register_blueprint(company_blueprint,url_prefix="/companies")

from src.models.voice_bot.views import voicebot_blueprint
app.register_blueprint(voicebot_blueprint,url_prefix="/voicebot")