import { QUIZ_FORM_STATE } from '../models/QUIZ_FORM_STATE';
import { QuestionModel } from '../models/QUESTION';

export class Quiz {
    id?: Number;
    name?: String;
    description?: String;
    duration?: Number;
    questionsNumber?: any;
    retries?: Number;
    backwards?: any;
    feedback?: Number;
    isPublic?: any;
}

export class QuizPageModel extends Quiz {
    viewMode: QUIZ_FORM_STATE;
    category: String[];
    questions: QuestionModel[];
    constructor(quiz?: Quiz) {
        super();
        if (!quiz) {
            quiz = new Quiz();
        }

        this.id = quiz.id || null;
        this.name = quiz.name || '';
        this.description = quiz.description || '';
        this.duration = quiz.duration || 0;
        this.questionsNumber = quiz.questionsNumber || 0;
        this.retries = quiz.retries || 0;
        this.backwards = quiz.backwards || 0;
        this.feedback = quiz.feedback || 0;
        this.isPublic = quiz.isPublic || 0;
    }

    toQuiz = () => {
        const quiz = new Quiz();
        quiz.id = this.id;
        quiz.name = this.name;
        quiz.description = this.description;
        quiz.duration = this.duration;
        quiz.questionsNumber = this.questionsNumber;
        quiz.retries = this.retries;
        quiz.backwards = this.backwards;
        quiz.feedback = this.feedback;
        quiz.isPublic = this.isPublic;

        return quiz;
    }
}
