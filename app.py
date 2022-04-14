import json

from GLOBALS import *
from flask_cors import CORS  # comment this on deployment
load_dotenv()

app = Flask(__name__, static_url_path='', static_folder='frontendnew/build')
CORS(app)  # comment this on deployment
app.secret_key = os.environ.get('SECRET_KEY')


@app.route("/")
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/tasks", methods=['POST', 'GET', 'PUT', 'DELETE'])
def func_tasks():
    data = json.load(open('frontendnew/db.json'))['tasks']
    print(f'[DATA]: {data}')
    return jsonify(data)


if __name__ == '__main__':
    app.run()


