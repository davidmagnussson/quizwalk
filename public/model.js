var QuizModel = function () {

    this.getAllQuestions = () => {
        return questions;
    }

    this.getOneQuestion = (input) => {
        for (question of questionsOLD) {
            if (question.id === input) {
                return question;
            }
        }
    }

    var questions = [{
        'history': [{
            'id': '1',
            'question': 'In 1927, who became the first man to fly solo and non-stop across the Atlantic',
            'alternatives': {
                'one': { 'alt': 'Orville Wright', 'answer': 'wrong' },
                'two': { 'alt': 'Wilbur Wright', 'answer': 'wrong' },
                'three': { 'alt': 'Charles Lindbergh', 'answer': 'right' },
                'four': { 'alt': 'Amelia Mary Earhart', 'answer': 'wrong' }
            },
            'correct': 'three'
        }, {
            'id': '2',
            'question': 'Who was the president during the U.S Civil War',
            'alternatives': {
                'one': { 'alt': 'Abraham Lincoln', 'answer': 'right' },
                'two': { 'alt': 'George W. Bush', 'answer': 'wrong' },
                'three': { 'alt': 'Barack Obama', 'answer': 'wrong' },
                'four': { 'alt': 'Franklin D. Roosevelt', 'answer': 'wrong' },
            },
            'correct': 'one'
        }, {
            'id': '3',
            'question': 'Which year was Gustav Vasa born?',
            'alternatives': {
                'one': { 'alt': '1623', 'answer': 'wrong' },
                'two': { 'alt': '1203', 'answer': 'wrong' },
                'three': { 'alt': '1549', 'answer': 'wrong' },
                'four': { 'alt': '1496', 'answer': 'right' },
            },
            'correct': 'four'
        }],
        'science': [{
            'id': '1',
            'question': 'Who founded the theory of relativity',
            'alternatives': {
                'one': { 'alt': 'Albert Einstein', 'answer': 'right' },
                'two': { 'alt': 'Isaac Newton', 'answer': 'wrong' },
                'three': { 'alt': 'Archimedes', 'answer': 'wrong' },
                'four': { 'alt': 'Niels Bohr', 'answer': 'wrong' },
            },
            'correct': 'one'
        }, {
            'id': '2',
            'question': 'What is the symbol for mercury',
            'alternatives': {
                'one': { 'alt': 'Kv', 'answer': 'wrong' },
                'two': { 'alt': 'Q', 'answer': 'wrong' },
                'three': { 'alt': 'Hg', 'answer': 'right' },
                'four': { 'alt': 'Ag', 'answer': 'wrong' },
            },
            'correct': 'three'
        }, {
            'id': '3',
            'question': 'What is the inner color of a rainbow?',
            'alternatives': {
                'one': { 'alt': 'Red', 'answer': 'right' },
                'two': { 'alt': 'Violet', 'answer': 'wrong' },
                'three': { 'alt': 'Indigo', 'answer': 'wrong' },
                'four': { 'alt': 'Green', 'answer': 'wrong' },
            },
            'correct': 'one'
        }],
        'sports': [{
            'id': '1',
            'question': 'What sport does Serena Williams play?',
            'alternatives': {
                'one': { 'alt': 'Tennis', 'answer': 'right' },
                'two': { 'alt': 'Golf', 'answer': 'wrong' },
                'three': { 'alt': 'Swimming', 'answer': 'wrong' },
                'four': { 'alt': 'Football', 'answer': 'wrong' },
            },
            'correct': 'one'
        }, {
            'id': '2',
            'question': 'Which country will host the next FIFA World Cup',
            'alternatives': {
                'one': { 'alt': 'Sweden', 'answer': 'wrong' },
                'two': { 'alt': 'Qatar', 'answer': 'right' },
                'three': { 'alt': 'Argentina', 'answer': 'wrong' },
                'four': { 'alt': 'Russia', 'answer': 'wrong' },
            },
            'correct': 'two'
        }, {
            'id': '3',
            'question': 'Who is Zlatan Ibrahimovic',
            'alternatives': {
                'one': { 'alt': 'The king of Sweden', 'answer': 'wrong' },
                'two': { 'alt': 'Zlatan is "Zlatan"', 'answer': 'right' },
                'three': { 'alt': 'Ikea´s founder', 'answer': 'wrong' },
                'four': { 'alt': 'A plumber', 'answer': 'wrong' },
            },
            'correct': 'two'
        }]
    }];
}
