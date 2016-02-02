__author__ = 'sutee'
from conjugation import *
import random

verbs = ['hablar', 'ir']
#maps pronouns and tenses to conventions used for keys in conjugation library
pronouns = {'yo': '1', 'tu': '2', 'el': '3', 'nosotros': '4', 'ellos': '6' }
tenses = {'present': 'pre'}

def _main():
    generate_conjugation()

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

def is_irregular(verb, pronoun, tense, blanket_filter=True):
    #simple filter than eliminates verbs that are irregular in any tense
    if blanket_filter:
        return is_irregular_ever(verb)

def is_irregular_ever(verb):
    return verb in irregular_verbs.keys()

def is_irregular_ever(verb):
    pass

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

#list of verbs, each item is tuple of (verb, dict of tense->irregularity)
# print len(irregular_verbs.items()[1][1].keys())
# print len(irregular_verbs.items()[2][1].keys())
# print len(irregular_verbs.items()[11][1].keys())
# print len(irregular_verbs.items()[21][1].keys())
# print irregular_verbs.items()[21]
# print irregular_verbs.values()
