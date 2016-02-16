__author__ = 'sutee'
from conjugation import *
import random, argparse
from enum import Enum

from collections import namedtuple

class Verbar(object):

    verbs = ['hablar', 'ir', 'dormir', 'llamar', 'venir', 'escribir']
    #maps pronouns and tenses to conventions used for keys in conjugation library
    pronouns = {'yo': '1', 'tu': '2', 'el': '3', 'nosotros': '4', 'ellos': '6' }
    tenses = {'present': 'pre', 'past': 'pas', 'future': 'fut', 'imperfect': 'cop'}
    mode_map = {'present': 'indicative', 'past': 'indicative', 'future': 'indicative', 'imperfect': 'indicative'}

    class IrregularityChoice(Enum):
        all = 1 #
        none = 2
        bycase =3

    def choose_verb(self):
        verb = random.choice(self.verbs)
        if self.is_irregular(verb, None, None):
             return self.choose_verb()
        else:
            return verb

    def choose_pronoun(self):
        return random.choice(self.pronouns.items())

    def choose_tense(self):
        return random.choice(self.tenses.items())

    def generate_key(self, pronoun, tense):
        return pronoun[1]+tense[1]

    def get_mode(self, tense):
        return self.mode_map[tense[0]]

    def is_irregular(self, verb, pronoun, tense, filter=IrregularityChoice.all):

        if filter == self.IrregularityChoice.none:
            return self.is_irregular_ever(verb)

        elif filter == self.IrregularityChoice.bycase:
            return self.is_irregular_here(verb, pronoun, tense)
        else:
            return False

    #simple filter than eliminates verbs that are irregular in any tense
    def is_irregular_ever(self, verb):
        return verb in irregular_verbs.keys()

    #filters irregularity of verb for a specific case-combination of pronoun and tense
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
        mode = self.get_mode(tense)
        if irregularity_setting is not self.IrregularityChoice.all:
            irregular = self.is_irregular(verb, pronoun, tense, irregularity_setting)
            if irregular: #if irregular, try again
                return self.generate_conjugation()
        key = self.generate_key(pronoun, tense)
        conjugation = conjugate(verb)
        question = (pronoun[0], verb, tense[0], mode, self.is_irregular_here(verb, pronoun, tense))
        answer = conjugation[key]
        return (question, answer)

    #generates a unique list of randomly generated questions
    def generate_quiz(self, n=10):
        uniq = {} #key by question
        while (len(uniq.values())<n):
            question, answer = self.generate_conjugation()
            if not uniq.has_key(question):
                uniq[(question[0], question[1], question[2])] = (question, answer)
        return uniq.values()

    def next_question(self):
        question, answer = self.generate_conjugation()
        front = ' + '.join(question)
        back = answer
        print "Question: "+front
        print "Answer: "+answer
        return front, back

def _main():
    verbar = Verbar()
    verbar.generate_quiz(50)

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
