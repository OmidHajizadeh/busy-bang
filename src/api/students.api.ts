import { Person, Student } from "../models/student.model";

export async function getStudents() {
  try {
    const response = await fetch(
      "https://hp-api.onrender.com/api/characters/students"
    );
    const data: Student[] = await response.json();

    const students: Person[] = data.map((student) => ({
      id: student.id,
      name: student.name,
      gender: student.gender,
      house: student.house,
      species: student.species,
      alive: student.alive,
    }));

    return students;
  } catch (error) {
    console.log(error);
  }
}
