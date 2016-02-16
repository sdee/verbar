from flask import Flask
app = Flask(__name__, static_url_path='', static_folder='app')
import os, json
from verbar import Verbar

#simple
@app.route('/quiz.json')
def hello_world():
    resp = []
    v = Verbar()
    quiz = v.generate_quiz(100)
    #now flatten into list of dictionaries with api fields
    for qa in quiz:
        question, answer = qa
        #TODO: more elegant way to make dict?
        row = {
            'pronoun': question[0],
            'infinitive': question[1],
            'tense': question[2],
            'mode': question[3],
            'irregular': question[4],
            'answer': answer
        }
        resp.append(row)
        print json.dumps(resp)
    return json.dumps(resp)

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 3000)))