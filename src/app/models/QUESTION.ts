export class Question {
    id?: Number;
    question: String;
    answer1: String;
    answer2: String;
    answer3: String;
    answer4: String;
    correct: String;
    photo: String;
    multiple: Boolean;
    open: Boolean;
    duration: Number;
    feedback: String;
    categoryId: Number;
}

export class QuestionModel extends Question {

    constructor(question?: Question) {
        super();
        if (!question) {
            question = new Question();
        }
        this.id = question.id || null;
        this.question = question.question || null;
        this.answer1 = question.answer1 || null;
        this.answer2 = question.answer2 || null;
        this.answer3 = question.answer3 || null;
        this.answer4 = question.answer4 || null;
        this.correct = question.correct || '';
        this.photo = question.photo || '';
        this.multiple = question.multiple || null;
        this.open = question.open || null;
        this.duration = question.duration || null;
        this.categoryId = question.categoryId || 1;
        this.feedback = question.feedback || '';
    }

    toQuestion = () => {
        const question = new Question();
        question.id = this.id;
        question.question = this.question;
        question.answer1 = this.answer1;
        question.answer2 = this.answer2;
        question.answer3 = this.answer3;
        question.answer4 = this.answer4;
        question.correct = this.correct;
        question.photo = this.photo;
        question.multiple = this.multiple;
        question.open = this.open;
        question.duration = this.duration;
        question.categoryId = this.categoryId;
        question.feedback = this.feedback;

        return question;
    }
}
