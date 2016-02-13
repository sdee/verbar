__author__ = 'sutee'
from conjugation import *
import random, argparse
from enum import Enum

from collections import namedtuple

verbs = ['hablar', 'ir', 'dormir']
#maps pronouns and tenses to conventions used for keys in conjugation library
pronouns = {'yo': '1', 'tu': '2', 'el': '3', 'nosotros': '4', 'ellos': '6' }
tenses = {'present': 'pre', 'past': 'pas', 'future': 'fut'}

class Verbar(object):

    class IrregularityChoice(Enum):
        all = 1 #
        none = 2
        bycase =3

    def choose_verb(self):
        verb = random.choice(verbs)
        if self.is_irregular(verb, None, None):
             return self.choose_verb()
        else:
            return verb

    def choose_pronoun(self):
        return random.choice(pronouns.items())

    def choose_tense(self):
        return random.choice(tenses.items())

    def generate_key(self, pronoun, tense):
        return pronoun[1]+tense[1]

    def is_irregular(self, verb, pronoun, tense, filter=IrregularityChoice.all):
        #simple filter than eliminates verbs that are irregular in any tense
        if filter == self.IrregularityChoice.none:
            return self.is_irregular_ever(verb)
        elif filter== self.IrregularityChoice.bycase:
            return self.is_irregular_here(verb, pronoun, tense)
        else:
            return False

    def is_irregular_ever(self, verb):
        return verb in irregular_verbs.keys()

    def is_irregular_here(self, verb, pronoun, tense):
        key = self.generate_key(pronoun, tense)
        if irregular_verbs.has_key(verb) and irregular_verbs[verb].has_key(key):
            return True
        else:
            return False

    #generate one conjugation
    def generate_conjugation(self):
        irregularity_setting = self.IrregularityChoice.all
        pronoun = self.choose_pronoun()
        tense = self.choose_tense()
        verb = self.choose_verb()

        if irregularity_setting is not self.IrregularityChoice.all:
            irregular = self.is_irregular(verb, pronoun, tense, irregularity_setting)
            if irregular: #if irregular, try again
                return self.generate_conjugation()
        key = self.generate_key(pronoun, tense)
        conjugation = conjugate(verb)
        question = pronoun[0], verb, tense[0]
        answer = conjugation[key]
        print "Question:", question
        print "Answer:", answer
        return (question, answer)

    def next_question(self):
        question, answer = self.generate_conjugation()
        front = ' + '.join(question)
        back = answer
        print "Question: "+front
        print "Answer: "+answer
        return front, back

def _main():
    verbar = Verbar()
    verbar.next_question()

if __name__ == "__main__":
    _main()
    parser = argparse.ArgumentParser(description='verbar')
    parser.add_argument('-D', '--recipe_dir', help='bar help')

#list of verbs, each item is tuple of (verb, dict of tense->irregularity)
# print len(irregular_verbs.items()[1][1].keys())
# print len(irregular_verbs.items()[2][1].keys())
# print len(irregular_verbs.items()[11][1].keys())
# print len(irregular_verbs.items()[21][1].keys())
# print irregular_verbs.items()[21]
# print irregular_verbs['dormir'].has_key('4pre')