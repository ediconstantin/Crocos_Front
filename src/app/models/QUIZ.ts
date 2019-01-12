import { QUIZ_FORM_STATE } from '../models/QUIZ_FORM_STATE';

export class Quiz {
    id?: Number;
    name?: String;
    description?: String;
    duration?: Number;
    questionsNumber?: Number;
    retries?: Number;
    backwards?: any;
    feedback?: Number;
    isPublic?: any;
}

export class QuizPageModel extends Quiz {
    viewMode: QUIZ_FORM_STATE;

    constructor(quiz?: Quiz) {
        super();
        if (!quiz) {
            quiz = new Quiz();
        }

        this.id = quiz.id || null;
        this.name = quiz.name || null;
        this.description = quiz.description || null;
        this.duration = quiz.duration || null;
        this.questionsNumber = quiz.questionsNumber || null;
        this.retries = quiz.retries || null;
        this.backwards = quiz.backwards || null;
        this.feedback = quiz.feedback || null;
        this.isPublic = quiz.isPublic || null;
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
