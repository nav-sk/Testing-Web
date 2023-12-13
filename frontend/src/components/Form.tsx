import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, FormEventHandler, useState } from "react";

interface Props {
  createData: (data: any) => void;
}

const Form: React.FC<Props> = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    salary: 0,
    position: "",
    joiningDate: "",
    department: "",
  };
  const [formState, setFormState] = useState<typeof initialState>(initialState);

  const updateValue = (field: string, value: string | number) => {
    setFormState((prevState: any) => ({ ...prevState, [field]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    props.createData(formState);
    setFormState(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack ml={5} spacing={2}>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            First Name
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            placeholder="First Name"
            value={formState.firstName}
            onChange={(e) => updateValue("firstName", e.target.value)}
          />
        </Stack>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            Last Name
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            placeholder="Last Name"
            value={formState.lastName}
            onChange={(e) => updateValue("lastName", e.target.value)}
          />
        </Stack>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            Date of Birth
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            placeholder="Date of Birth"
            value={formState.dob}
            type="date"
            onChange={(e) => updateValue("dob", e.target.value)}
          />
        </Stack>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            Salary
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            placeholder="Salary"
            value={formState.salary}
            type="number"
            onChange={(e) => updateValue("salary", e.target.value)}
          />
        </Stack>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            Position
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="position-label">Position</InputLabel>
            <Select
              labelId="position-label"
              value={formState.position}
              id="position"
              label="Position"
              size="small"
              onChange={(e) => updateValue("position", e.target.value)}
            >
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            Joining Date
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            placeholder="Joining Date"
            value={formState.joiningDate}
            type="date"
            onChange={(e) => updateValue("joiningDate", e.target.value)}
          />
        </Stack>
        <Stack
          width="fit-content"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Typography>
            Department
            <Typography color="red" display="inline" px={1}>
              *
            </Typography>
          </Typography>
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              value={formState.department}
              id="department"
              label="department"
              size="small"
              onChange={(e) => updateValue("department", e.target.value)}
            >
              <MenuItem value="developer">Sales</MenuItem>
              <MenuItem value="manager">Development</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Button variant="contained" sx={{ width: "300px" }} type="submit">
          Add Entry
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
