import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetStudents } from "../hooks/queries";

const columns: GridColDef[] = [
  { field: "id", headerName: "شناسه", width: 200 },
  { field: "name", headerName: "اسم", width: 200 },
  { field: "gender", headerName: "جنسیت", width: 70 },
  { field: "house", headerName: "خانه", width: 130 },
  { field: "species", headerName: "گونه", width: 130 },
  { field: "alive", headerName: "وضعیت حیات", width: 130 },
];

export default function DataTable() {
  const { data: students, isLoading: isLoadingStudents } = useGetStudents();

  if (isLoadingStudents) {
    //todo: Add loader
    return;
  }

  return (
    <DataGrid
      rows={students}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}
