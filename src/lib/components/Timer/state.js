import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let exams = [];
const exams_store = writable([]);

function addExam(exam) {
    exams_store.update(exams => {
        const newExams = [...exams, exam];
        return newExams;
    });
}

function deleteExam(exam) {
    exams_store.update(stored => {
        return stored.filter((stored_exam) => stored_exam.id !== exam.id);
    });
}

function startPendingExams() {
    exams_store.update(stored => {
        const allExams = [];
        stored.forEach((exam) => {
            if (exam.start_date === null) exam.start_date = new Date();
            allExams.push(exam);
        });
        return allExams;
    });
}

function clearExpiredExams() {
    exams_store.update(stored => {
        const allExams = [];
        const currentTime = new Date().getTime();
        stored.forEach((exam) => {
            if (exam.start_date === null || exam.start_date.getTime() + (exam.duration * 60000) > currentTime) {
                allExams.push(exam);
            }
        });
        return allExams;
    });
}

function updateExam(exam) {
    exams_store.update(stored => {
        const allExams = [];
        stored.forEach((e) => {
            if (e.id === exam.id) {
                allExams.push(exam);
                return;
            }
            allExams.push(e);
        });
        return allExams;
    });
}

function getExam(id) {
    let found_exam = null;
    exams.forEach(exam => {
        if (exam.id !== id) {
            return;
        }
        found_exam = exam;
    });
    return found_exam;
}

if (browser) {
    const val = window.localStorage.getItem('exams');
    if (val !== null) {
        const parsed = JSON.parse(val);
        parsed.forEach((exam) => {
            if (exam.start_date) {
                exam.start_date = new Date(exam.start_date);
            }
        });
        exams = parsed;
        exams_store.set(parsed);
    }

    exams_store.subscribe((val) => {
        exams = val;
        window.localStorage.setItem('exams', JSON.stringify(val));
    })
}


export const examState = { exams_store, addExam, getExam, deleteExam, startPendingExams, clearExpiredExams, updateExam }
