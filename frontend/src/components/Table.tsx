import { Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Props {
  data: any[];
}

const Table: React.FC<Props> = (props) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Employee ID",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
    {
      field: "dob",
      headerName: "Date of Birth",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
    {
      field: "age",
      headerName: "Employee Age",
      flex: 1,
      renderCell: (params) => (
        <Typography>
          {((new Date().getTime() - new Date(params.row.dob).getTime()) /
            (1000 * 60 * 60 * 24 * 365.25)) |
            0}
        </Typography>
      ),
    },
    {
      field: "salary",
      headerName: "Salary",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
      renderCell: (params) => <Typography>{params.value || "-"}</Typography>,
    },
  ];

  return (
    <Stack my={2}>
      <DataGrid
        columns={columns}
        rows={props.data}
        pagination
        pageSizeOptions={[5, 10, 15, 20, 100]}
      />
    </Stack>
  );
};
export default Table;
