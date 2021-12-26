import {
  FormControl,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Snackbar,
} from "@material-ui/core";
import Content from './../partials/Content'
import { Alert } from "@material-ui/lab";
import { AddBox, Save } from "@material-ui/icons";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AttributeGroup from "./attribute/AttributeGroup";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formRow: {
      margin: theme.spacing(2, "auto"),
    },
  })
);

export default function EditCategory() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleConfirm = () => {};
  const saveCategory = () => {};
  const openDialog = () => {};
  return (
    <Content title="ویرایش / اضافه کردن دسته بندی">
      <Snackbar open={false} autoHideDuration={3000}>
        <Alert variant="filled" elevation={6} severity="success">
          دسته بندی با موفقیت ذخیره شد
        </Alert>
      </Snackbar>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          عنوان دسته بندی خاصیت ها
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="attributes_group_title"
            label="عنوان دسته بندی خاصیت ها"
            type="text"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              //   setTitle(event.currentTarget.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            بستن
          </Button>
          <Button onClick={handleConfirm} color="primary">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      <FormControl fullWidth className={classes.formRow}>
        <TextField
          variant="outlined"
          id="title"
          name="title"
          label="عنوان - فارسی"
          //   defaultValue={state.title}
          onBlur={
            (e: React.FocusEvent<HTMLInputElement>) => {}
            // updateTitle(e.currentTarget.value)
          }
        />
      </FormControl>
      <FormControl fullWidth className={classes.formRow}>
        <TextField
          variant="outlined"
          id="slug"
          name="slug"
          label="اسلاگ - انگلیسی"
          //   defaultValue={state.slug}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            // updateSlug(e.currentTarget.value)
            console.log(e.target.value);
          }}
        />
      </FormControl>
      {/* {state.groups.map((group) => (
        <AttributeGroup key={group.hash} {...group} />
      ))} */}
      <AttributeGroup title="مشخصات کلی" />
      <FormControl className={classes.formRow}>
        <Button
          onClick={handleOpen}
          color="primary"
          variant="contained"
          startIcon={<AddBox />}
        >
          اضافه کردن دسته بندی ویژگی ها
        </Button>
      </FormControl>
      <Grid container justify="flex-end">
        <Button
          onClick={saveCategory}
          color="default"
          variant="contained"
          startIcon={<Save />}
        >
          ذخیره سازی
        </Button>

      </Grid>
      
    </Content>
  );
}
