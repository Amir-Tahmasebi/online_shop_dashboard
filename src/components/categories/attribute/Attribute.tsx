import {
  TextField,
  Switch,
  FormControlLabel,
  makeStyles,
  Theme,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
const useStyle = makeStyles((theme: Theme) => ({
  attributeitem: {
    margin: theme.spacing(0, 1),
  },
  attributeWrapper: {
    margin: theme.spacing(1, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Attribute() {
  const classes = useStyle();
  return (
    <Box className={classes.attributeWrapper}>
      <TextField
        variant="outlined"
        label="عنوان فارسی"
        id="attribute_title_fa"
        className={classes.attributeitem}
      />
      <TextField
        variant="outlined"
        label="عنوان انگلیسی"
        id="attribute_title_en"
        className={classes.attributeitem}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">نوع داده</InputLabel>
        <Select
          native
          //   value={}
          //   onChange={handleChange}
          id="age-native-simple"
          name="age"
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControlLabel
        label="استفاده از فیلتر"
        className={classes.attributeitem}
        control={<Switch id="attribute_filterable" color="primary" />}
      />
      <FormControlLabel
        label="استفاده برای قیمت"
        className={classes.attributeitem}
        control={<Switch id="attribute_filterable" color="primary" />}
      />
    </Box>
  );
}
