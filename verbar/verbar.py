__author__ = 'sutee'
from conjugation import *
import random

#maps pronouns to number for generating key
pronouns = {'yo': '1', 'tu': '2', 'el': '3', 'nosotros': '4', 'ellos': '6' }
verbs = ['hablar']
tenses = {'present': 'pre'}

def _main():
    generate_conjugation()

def choose_verb():
    return random.choice(verbs)

def choose_pronoun():
    return random.choice(pronouns.items())

def choose_tense():
    return random.choice(tenses.items())

def generate_key(pronoun, tense):
    return pronoun[1]+tense[1]

def generate_conjugation():
    verb = choose_verb()
    pronoun = choose_pronoun()
    tense = choose_tense()
    key = generate_key(pronoun, tense)
    conjugation = conjugate(verb)
    question = verb, pronoun[0], tense[0]
    answer = conjugation[key]
    print "Question:", question
    print "Answer:", answer

if __name__ == "__main__":
    _main()