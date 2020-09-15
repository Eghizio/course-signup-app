import { Student } from "../types/student";
import randomStudents from "./randomStudents.json";
import generateID from "../utils/generateID";


export const generateRandomStudents = (amount: number): Student[] => {
    const rndStudents: Student[] = [];

    for(let i=0; i<amount; i++){
        const r_id = generateID();
        const r_firstName = generateID();
        const r_secondName = generateID();
        const r_email = generateID();
        const r_class = generateID();
        const r_extras = [generateID()];

        const r_student: Student = {
            id: r_id,
            firstName: r_firstName,
            secondName: r_secondName,
            email: r_email,
            class: r_class,
            extras: r_extras
        };

        rndStudents.push(r_student);
    }

    return rndStudents;
};

const getRandomStudents = (amount: number = 1): Student[] => {
    if(amount < 1) return [];

    return randomStudents.slice(0, amount);
};

export default getRandomStudents;