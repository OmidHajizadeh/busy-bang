import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../api/students.api";

export function useGetStudents() {
  return useQuery({
    queryKey: ['GET_STUDENTS'],
    queryFn: getStudents,
    refetchOnMount: false,
  });
}