__author__ = 'sutee'
from conjugation import *
import random
from enum import Enum

from collections import namedtuple

verbs = ['hablar', 'ir', 'dormir']
#maps pronouns and tenses to conventions used for keys in conjugation library
pronouns = {'yo': '1', 'tu': '2', 'el': '3', 'nosotros': '4', 'ellos': '6' }
tenses = {'present': 'pre'}

class IrregularityChoice(Enum):
    all = 1 #
    none = 2
    bycase =3

def _main():
    next_question()

def choose_verb():
    verb = random.choice(verbs)
    if is_irregular(verb, None, None):
         return choose_verb()
    else:
        return verb

def choose_pronoun():
    return random.choice(pronouns.items())

def choose_tense():
    return random.choice(tenses.items())

def generate_key(pronoun, tense):
    return pronoun[1]+tense[1]

def is_irregular(verb, pronoun, tense, filter=IrregularityChoice.all):
    #simple filter than eliminates verbs that are irregular in any tense
    if filter == IrregularityChoice.none:
        return is_irregular_ever(verb)
    elif filter== IrregularityChoice.bycase:
        return is_irregular_here(verb, pronoun, tense)
    else:
        return False

def is_irregular_ever(verb):
    return verb in irregular_verbs.keys()

def is_irregular_here(verb, pronoun, tense):
    key = generate_key(pronoun, tense)
    if irregular_verbs.has_key(verb) and irregular_verbs[verb].has_key(key):
        return True
    else:
        return False

def generate_conjugation():
    irregularity_setting = IrregularityChoice.all
    pronoun = choose_pronoun()
    tense = choose_tense()
    verb = choose_verb()

    if irregularity_setting is not IrregularityChoice.all:
        irregular = is_irregular(verb, pronoun, tense, irregularity_setting)
        if irregular: #if irregular, try again
            return generate_conjugation()
    key = generate_key(pronoun, tense)
    conjugation = conjugate(verb)
    question = pronoun[0], verb, tense[0]
    answer = conjugation[key]
    print "Question:", question
    print "Answer:", answer
    return (question, answer)

def next_question():
    question, answer = generate_conjugation()
    front = ' + '.join(question)
    back = answer
    print "Question: "+front
    print "Answer: "+answer
    return front, back

if __name__ == "__main__":
    _main()

#list of verbs, each item is tuple of (verb, dict of tense->irregularity)
# print len(irregular_verbs.items()[1][1].keys())
# print len(irregular_verbs.items()[2][1].keys())
# print len(irregular_verbs.items()[11][1].keys())
# print len(irregular_verbs.items()[21][1].keys())
# print irregular_verbs.items()[21]
# print irregular_verbs['dormir'].has_key('4pre')
