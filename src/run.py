import os

os.chdir("C:\\Users\\kunjm\\Desktop\\Drives\\Projects\\Kaku Office\\phase_flask1\\")
print(os.getcwd())

from src.app import app
app.run(debug=app.config['DEBUG'], port=4889)

